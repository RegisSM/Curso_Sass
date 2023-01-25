const path = require('path');
module.exports = {
    entry:{
        home:'./src/home.js', // Fonte do arq (sorce)
        pedido:'./src/pedido.js'
    },
    output:{
        filename:'assets/js/[name].bundle.js', // localização do js
        path: path.resolve(__dirname,'dist'), // pasta onde fica js principal
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
                            name: 'assets/images/[name].[ext]',
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