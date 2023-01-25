import $ from 'jquery';
$(function(){
    $('#botao').on('click',function(){
        $('h1').html('Frase alterada. Para altera-la foi necesario utilizando o jquery com o webpack');
    });
});