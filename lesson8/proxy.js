const zlib = require('zlib');
const brotli = require('brotli');
const util = require('util');
const {
    StringDecoder,
} = require('string_decoder');
const service = require('./service');


const decoder = new StringDecoder('utf8');
const encoder = new util.TextEncoder();

module.exports = {
    init(proxy) {
        proxy.on('proxyReq', (proxyReq) => {
            proxyReq._options.headers.cookie = '';
        });

        proxy.on('proxyRes', (proxyRes, _req, _res) => {
            proxyRes.headers = service.clearHeadersFormat(proxyRes.headers);
            proxyRes.headers = service.removeSecurityHeaders(proxyRes.headers);
            proxyRes.headers = service.optimizeCookieHeaders(proxyRes.headers);

            let body = [];

            proxyRes.on('data', (chunk) => {
                body.push(chunk);
            });

            proxyRes.on('end', () => {
                body = Buffer.concat(body);

                if (
                    proxyRes.headers['Content-Type']
                    && (proxyRes.headers['Content-Type'].includes('javascript')
                    || proxyRes.headers['Content-Type'].includes('html'))
                ) {
                    if (proxyRes.headers['Content-Encoding'] === 'gzip') {
                        zlib.unzip(body, (err, buffer) => {
                            if (err) {
                                return _res.end(body);
                            }

                            body = buffer.toString();

                            body = service.replaceContent(body);

                            const gzip = zlib.gzipSync(body);

                            proxyRes.headers['Content-Length'] = gzip.length;

                            return _res.writeHead(200, proxyRes.headers).end(gzip);
                        });
                    } else if (proxyRes.headers['Content-Encoding'] === 'br') {
                        body = brotli.decompress(body);

                        _res.writeHead(200, proxyRes.headers);

                        body = decoder.write(body);

                        body = service.replaceContent(body);

                        const uint8array = encoder.encode(body);

                        body = brotli.compress(uint8array);

                        body = Buffer.from(body);

                        proxyRes.headers['Content-Length'] = Buffer.byteLength(body, 'utf8');

                        _res.end(body);
                    } else {
                        body = body.toString();

                        body = service.replaceContent(body);

                        proxyRes.headers['Content-Length'] = Buffer.byteLength(body, 'utf8');

                        _res.writeHead(200, proxyRes.headers);
                        _res.end(body);
                    }
                } else {
                    _res.writeHead(200, proxyRes.headers);
                    _res.end(body);
                }
            });
        });

        proxy.on('error', (error, _req, _res) => {
            // global.host.replace('https', 'http');

            proxy.web(_req, _res, {
                target: global.host,
                changeOrigin: true,
                selfHandleResponse: true,
                followRedirects: true,
                toProxy: false,
                secure: true,
                protocolRewrite: true,
            });
        });
    },
};
