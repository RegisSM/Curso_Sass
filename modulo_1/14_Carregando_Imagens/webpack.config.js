const diretorio = require('path');
module.exports = {
    entry:'./src/index.js',
    output: {
        filename:'script.js',
        path: diretorio.resolve(__dirname,'dist/assets/js'),
    },
    mode:'production', // codificação sem formatação. Logo produz arquivo mais compacto
    module:{
        rules:[
            {
                test: /\.css$/i,
                use:['style-loader','css-loader']},
            {
                test:/\.(png|jpg|jpeg|gif|svg)$/i,
                type:'asset/resource',
                /* options:{      
                    // comando a baixo ira criar a pasta
                    name: '../images/[path][name].[ext]',
                     //volta pasta assets e cria uma pasta image, onde recebe a img importada.
                    // onde ela  irar salvar o nome da img e a extesão que pertence
                } */
            }
        ]
    }
};
  


