const path=require('path')
const HtmlWebPackPlugin=require('html-webpack-plugin')
const htmlPlugin=new HtmlWebPackPlugin({
    template:path.join(__dirname,'./src/index.html'),
    filename:'index.html'
})
//webpack 默认只能打包处理,.js后缀名类型的文件，像.png .vue无法主动处理，所以要配置第三方的loader
module.exports={
    mode:'development',
    plugins:[
        htmlPlugin
    ],
    module:{
        //所有第三方模块的配置规则
        rules:[ //第三方匹配规则
            { test: /\.js|jsx$/,use:'babel-loader',exclude:/node_modules/},
            //千万别忘记添加exclude排除项
        ]
    }
}