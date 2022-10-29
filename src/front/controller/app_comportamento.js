import {alternaTela} from '../model/comportamentos.js';
import {criptoEmail} from '../model/comportamentos.js';
import {clicaInput} from '../model/comportamentos.js';

//inicializa os tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})



//esta parte  coleta  qualquer click realizado na tela e verifica se foi em algum botão que possui comprotamento especial
document.addEventListener('click',(e)=>{
    let formulario=document.querySelector('form');
    if(e.target.id==='botao-recuperar'&&formulario.checkValidity()){
        e.preventDefault();
        alternaTela();
    }

//verifica se o botão pressisonado foi
    else if(e.target.id==='botao-redefinir'||e.target.id==='botao-cadastro'){
        e.preventDefault();
        let botao=e.target;
        if(formulario.checkValidity()){
            botao.click();
            return;
        }
    }
})