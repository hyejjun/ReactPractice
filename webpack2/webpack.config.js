const path = require('path')
const webpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    name : 'hyejun',
    mode : 'development',    //배포 : production
    devtool: "eval",         // 배포 : hidden-source-map

    resolve:{
        extensions:['.js','.jsx']
    },
    //입력받을 내용들 - 웹팩이 어떤걸 읽을지 지정해준다. - 어떤걸 넣어서 app.js로 만들지
    entry : {
        app : ['./index.jsx']
    },

    // module을 통해서 뭐를 통해서 해석해야 하는지 알아내고 그 다음에 app.js로 보낸다
    module : {
        rules : [{
            test : /\.jsx?$/,       //확장자가 .jsx냐 혹은 .js 냐 이게 맞다면 아래의 내용을 실행하겠다 - 정규식 표현
            loader:'babel-loader',      // webpack과 babel 을 이어주는 녀석
            options : {
                presets : [
                    ['@babel/preset-env',{
                        targets : {
                            browsers : ['> 5% in KR','last 2 chrome versions']
                        },
                        // debug : true, 이 부분은 new webpack.. 이걸로 인해 안써도됨
                    }],
                    '@babel/preset-react'
                ],
                plugins : [         //refresh 위해서 
                    'react-refresh/babel'
                ],
            }
        },{
            test : /\.css$/,
            use : [MiniCssExtractPlugin.loader,'css-loader']
        }]
    },

    //plugin을 담아주자
    plugins:[
        new webpackPlugin(),     //class를 객체형태로 변경
        new webpack.LoaderOptionsPlugin({debug:true}),   // 디버그 쓸 수 있는 공간을 다 디버그로 달아준다는것
        new MiniCssExtractPlugin({filename:'app.css'})
    ],

    // 내보낼 내용들 - 경로와 파일명을 설정한다
    output : {
        path : path.join(__dirname,'dist'),     // 현재 디렉토리 + dist 까지 /www/user/ingoo/dist 
        filename : 'app.js',
        publicPath:'/dist'     // 정적파일로
    },

    devServer:{
        publicPath:'/dist',
        hot:true,
    }
}