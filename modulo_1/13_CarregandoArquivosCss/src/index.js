import X from 'jquery';
import './css/style.css'; // importando o arquivo css
X(function(){
    X('#botao').on('click',function(){
        X('h1').html('A frase foi reescrita!!');
        X(this).addClass('botao');
    });
});