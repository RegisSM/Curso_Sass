//A seguir teremos algumas  confirgurações especificas neste arquivo de configuranção para que 
//o web consiga ler o comportamento nos minimos detalhes
const path = require('path');
   
module.exports ={
    entry:'./src/index.js', //entrada
    output:{ //saída
            filename:'script.js', // nome do arquivo que sera criado em js
            path:path.resolve(__dirname, 'dist'), // pasta onde o arquivo html estara
        },
    mode:'production'
    };

    // Vamos configurar um atalho para compilar o codigo.
    //Este atalho sera encontrado na pasta package.json
    
    /*  o codigo do atalho é:
     "build": "webpack --config webpack.config.js " 
    */