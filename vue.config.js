module.exports = {
    lintOnSave: false,
    devServer: {
        port: 8080,
        https: false,
        overlay: {
            warnings: true,
            errors: true
        },
        proxy: {
            '/api': {
                target: "http://localhost:3000/",
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    "^/api": ""
                }
            },
        }
    }
}
