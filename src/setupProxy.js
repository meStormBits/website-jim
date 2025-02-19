const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://www.wixapis.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    })
  );
};