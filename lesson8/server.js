const http = require('http');
const httpProxy = require('http-proxy');
const url = require('url');
const handlers = require('./proxy');

const port = 3000;

const proxy = httpProxy.createProxyServer({
    ignorePath: false,
});

handlers.init(proxy);

const server = http.createServer(async (req, res) => {
    let urlParts = {};

    try {
        urlParts = url.parse(req.url, true);
    } catch (error) {
        console.log(error);
    }

    if (urlParts.query.host) {
        global.host = urlParts.query.host;
    }

    proxy.web(req, res, {
        target: global.host,
        changeOrigin: true,
        selfHandleResponse: true,
        followRedirects: true,
        toProxy: false,
        secure: true,
        protocolRewrite: true,
    });
});

console.log(`listening on port ${port}`);

server.listen(port);
