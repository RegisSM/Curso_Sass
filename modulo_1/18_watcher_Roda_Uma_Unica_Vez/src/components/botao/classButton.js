import './styleButton.css';
class Botao{
    
    constructor(){ // ira forncecer os dados especifico de um botao
        this.title =''
        this.callback = function(){};
    }
    setTitle(t){ // o parametro recebera um titlo
        this.title = t; // guarda o valor de t

    }
    setClick(f){// ação ao clicar
        this.callback = f;
    }
    render(){ // criara o icone
        let b = document.createElement('button'); // cria o botao
        b.classList.add('botaoNeo'); // add a classe nele
        b.innerHTML= this.title; // nome deste botão
        b.addEventListener('click',this.callback); //evento de clicar
        return b;
    }
}
export default Botao;