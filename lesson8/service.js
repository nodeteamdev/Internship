const cheerio = require('cheerio');

module.exports = {
    /**
     * @param {Object} headers
     * @description req.headers
     * @returns
     */
    clearHeadersFormat(headers) {
        const newHeaders = {};

        Object.keys(headers).forEach((header) => {
            const capitalHeader = header.split('-').map((item) => item.charAt(0).toUpperCase() + item.slice(1)).join('-');

            newHeaders[capitalHeader] = headers[header];
        });

        return newHeaders;
    },

    /**
     * @param {String} body is HTML
     * @returns
     */
    replaceContent(body) {
        const $ = cheerio.load(body);
        const BODY = $('BODY');

        if (BODY.length) {
            BODY.append(`
                <h1 style="color: cornflowerblue; position: fixed; z-index: 9999; left: 50%; top: 10px;">Hello world!</h1>
            `);

            return $.html();
        }

        return body;
    },

    /**
     * @param {Object} headers
     * @description req.headers
     * @returns
     */
    removeSecurityHeaders(headers) {
        delete headers['X-Frame-Options'];
        delete headers['Content-Security-Policy'];
        delete headers['X-Xss-Protection'];
        delete headers['X-XSS-Protection'];
        delete headers['X-Content-Type-Options'];
        delete headers['Strict-Transport-Security'];

        return headers;
    },

    /**
     * @param {Object} headers
     * @description req.headers
     * @returns
     */
    optimizeCookieHeaders(headers) {
        if (headers['Set-Cookie']) {
            headers['Set-Cookie'] = headers['Set-Cookie'].map((item) => {
                item = item.replace('\u0001', '');

                return item;
            });
        }

        return headers;
    },
};
