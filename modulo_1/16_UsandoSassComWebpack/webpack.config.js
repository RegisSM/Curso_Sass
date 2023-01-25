const diretorio = require('path');
module.exports = {
    entry:'./src/index.js',
    output: {
        filename:'script.js',
        path: diretorio.resolve(__dirname,'dist'),
    },
    mode:'production', // codificação sem formatação. Logo produz arquivo mais compacto
    module:{
        rules:[
            {test: /\.css$/,use:['style-loader','css-loader']},
            // arq com a extenção .scss usara os seguintes loader:
            {test: /\.scss$/,use:['style-loader','css-loader','sass-loader']}, 
        ]
    }
};
  


