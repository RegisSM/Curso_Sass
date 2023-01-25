/*const pacote = require('pacote');  */
const diretorio = require('path');

module.exports = {
    entry:'./src/index.js',
    output: {
        filename: 'script.js',
        path: diretorio.resolve(__dirname,'dist'),
    },
    mode:'production',
    /* fazendo as configuraçoes dos loader's */
    module:{
        rules:[{ // regras => seguido de um vetor e dentro do vetor um tem-se o objeto
            test:/\.css$/, // irar verificar se o arq é .css
            use:[ 'style-loader' , 'css-loader' ] // caso seja utliza-se o style-loader e css-loader.
        }]
    }
};

