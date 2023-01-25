import $ from 'jquery';
import './css/teste.scss';
import Botao from './components/botao/classButton.js'; //importanto a class de um botao
$(function(){
    let botao = new Botao();      
    botao.setTitle('Testar');
    botao.setClick(function(){
        alert("Parabéns você acabou de clicar no botão!");
    });
    $('.area').html(botao.render());
});
