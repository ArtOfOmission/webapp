module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://localhost:6001', // target host
                changeOrigin: true, // needed for virtual hosted sites
                ws: true, // proxy websockets
                pathRewrite: {}
            }
        }
    }
}