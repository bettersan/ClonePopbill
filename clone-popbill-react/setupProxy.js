const createProxyMiddleWare = require("http-proxy-middleware")

module.exports = function(app){
    app.use(
        '/auth',
        createProxyMiddleWare({
            target : "http://localhost:3100/",
            changeOrigin : true
        })
    );
}