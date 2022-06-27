const path = require("path");

module.exports = {
    // 开发阶段，简易打包，打包速度快
    mode: "development",
    entry: "./src/index.js", // 入口
    output: {
        path: path.resolve(__dirname, "dist"), // 出口路径 绝对路径
        filename: "main.js", // 出口文件名
    },
    devServer: {
        port: 3000, // 端口号
        open: true,
    },
    module: {
        // loader 加载器 配置在这儿
        rules: [
            // loader的规则
            {
                test: /\.css$/, // 匹配所有的css文件
                // loader 执行的顺序： use数组里从右向左运行
                // 先用 css-loader 让webpack能够识别 css 文件的内容并打包
                // 再用 style-loader 将样式, 把css插入到dom中
                use: ["style-loader", "css-loader"],
            },


            {
                test: /\.less$/, // 匹配执行类型的文件
                // 使用less-loader, 让webpack处理less文件, 内置还会用less翻译less代码成css内容
                // 执行的顺序 less-loader css-loader style-loader
                // less-loader 先把less代码转换成css
                // css-loader 再把css代码转换成webpack 可以识别的js代码
                // style-loader 在把css代码插入到 dom中
                use: ["style-loader", "css-loader", "less-loader"],
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/li,
                use: [
                    {
                        loader: 'url-loader', // 匹配文件, 尝试转base64字符串打包到js中
                        // 配置limit, 超过8k, 不转, file-loader复制, 随机名, 输出文件
                        options: {
                            limit: 8 * 1024,   
                        },
                    },
                ],
            },
        ],
    },

};
