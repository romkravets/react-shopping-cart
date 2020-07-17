/*
const { createProxyMiddleware } = require('http-proxy-middleware');

const proxy = createProxyMiddleware({
    target: 'http://localhost:5000/',
    pathRewrite: {
        '^/api': '',
    },
    changeOrigin: true,
});

module.exports = (app) => {
    app.use('/api', proxy);
};
*/
