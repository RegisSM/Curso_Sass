import $ from 'jquery';
import './css/style.scss';
import Botao from './components/botao/classButton.js';
import FeedImg from './imagens/images.jpg';

$(function(){
    let botao = new Botao();      
    botao.setTitle('Testar');
    botao.setClick(function(){
        alert("Parabéns você acabou de clicar no botão!");
    });
    $('.area').html(botao.render());
});
