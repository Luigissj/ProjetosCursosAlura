var botaoMatriculas = document.querySelector(".botao__Matricula");
var totalHoras = document.querySelector(".js-total-de-cursos");
var totalCursos = document.querySelector(".js-total-de-horas");

var valorTotalHoras = 0;
var valorTotalCursos = 0;

function verificarMatriculasAceitas(){
    
}

function adicionarMatricula(checkbox){
    if (checkbox.checked){
        valorTotalHoras += parseInt(checkbox.value);
        valorTotalCursos++;
    } else {
        valorTotalHoras -= parseInt(checkbox.value);
        valorTotalCursos--;
        console.log(valorTotalHoras + " " + valorTotalCursos + " ");
    }
    totalHoras.textContent = valorTotalHoras + " h";
    totalCursos.textContent = valorTotalCursos + " Curso(s)";
}

function confirmarMatriculas(){
    if (valorTotalCursos != 0){
        alert("Matricula feita!!!");
        window.location.href = "index.html";
    } else {
        alert("Nenhum curso selecionado");
    }
}