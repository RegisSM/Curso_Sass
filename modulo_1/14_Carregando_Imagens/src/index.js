import $ from 'jquery';
import './css/style.css';
import Bixo_A from '../src/images/bixo-a.png'
import Bixo_B from '../src/images/bixo-b.jpg'
import Bixo_C from '../src/images/bixo-c.jpg'
$(function(){
                $('#botao').on('click',function(){
                    $('h1').html('Nova frase!');
                    $(this).addClass('botao');

                    $('#imagem').attr('src',Bixo_A);
                });
            });
