/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function chart(req, res, next) {
    try {
        return res.status(200).json({
            data: [
                {
                    code3: 'ABW',
                    value: 582,
                },
                {
                    code3: 'AFG',
                    value: 53,
                },
                {
                    code3: 'AGO',
                    value: 2,
                },
                {
                    code3: 'ALB',
                    value: 104,
                },
                {
                    code3: 'ATG',
                    value: 229,
                },
                {
                    code3: 'BTN',
                    value: 20,
                },
                {
                    code3: 'BWA',
                    value: 3,
                },
                {
                    code3: 'CAF',
                    value: 7,
                },
                {
                    code3: 'CAN',
                    value: 3,
                },
                {
                    code3: 'CMR',
                    value: 49,
                },
                {
                    code3: 'COD',
                    value: 34,
                },
                {
                    code3: 'CYM',
                    value: 253,
                },
                {
                    code3: 'CYP',
                    value: 126.64,
                },
                {
                    code3: 'CZE',
                    value: 136.85,
                },
                {
                    code3: 'DZA',
                    value: 17,
                },
                {
                    code3: 'ECU',
                    value: 65.97,
                },
                {
                    code3: 'FIN',
                    value: 18,
                },
                {
                    code3: 'FJI',
                    value: 49,
                },
                {
                    code3: 'IRL',
                    value: 68,
                },
                {
                    code3: 'IRN',
                    value: 49,
                },
                {
                    code3: 'LBR',
                    value: 47.9,
                },
                {
                    code3: 'LBY',
                    value: 3,
                },
                {
                    code3: 'LCA',
                    value: 291,
                },
                {
                    code3: 'NLD',
                    value: 505,
                },
                {
                    code3: 'NOR',
                    value: 14,
                },
                {
                    code3: 'SUR',
                    value: 3,
                },
                {
                    code3: 'SVK',
                    value: 112,
                },
                {
                    code3: 'WSM',
                    value: 68,
                },
                {
                    code3: 'YEM',
                    value: 52,
                },
                {
                    code3: 'ZAF',
                    value: 46,
                },
                {
                    code3: 'ZMB',
                    value: 22,
                },
            ],
        });
    } catch (error) {
        res.status(500).json({
            message: error.name,
            details: error.message,
        });

        return next(error);
    }
}


module.exports = {
    chart,
};
