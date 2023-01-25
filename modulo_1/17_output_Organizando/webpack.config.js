const path = require('path');
module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'script.js',
        path: path.resolve(__dirname,'dist/assets/js'),
        // cria a pasta assets e a js
        // logo o arq script.js vai para lá.
    },
    mode: 'production',
    module:{
        rules:[
            {test: /\.css$/,use:['style-loader','css-loader']},
            {
                test: /\.(png|jpg|gif|svg)$/,
                use:[
                    {
                        loader: 'file-loader',
                        options:{
                            // comando a baixo ira criar a pasta
                            name: '../images/[name].[ext]',
                            //volta pasta assets e cria uma pasta image, onde recebe a img importada.
                            // onde ela  irar salvar o nome da img e a extesão que pertence
                        }
                    }
                ]
            },
            {test: /\.scss$/,use:['style-loader','css-loader','sass-loader']}
        ]
    }
};



