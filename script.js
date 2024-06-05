function adicionaLinhaTabela(nome, matricula, nota1, nota2){
    const tabela = document.getElementById("tabela-formulario").getElementsByTagName("tbody")[0]
    const novaLinha = tabela.insertRow()

    const colunaNome = novaLinha.insertCell(0)
    colunaNome.innerHTML = nome

    const colunaMatricula = novaLinha.insertCell(1)
    colunaMatricula.innerHTML = matricula

    const colunaNota1 = novaLinha.insertCell(2)
    colunaNota1.innerHTML = nota1

    const colunaNota2 = novaLinha.insertCell(3)
    colunaNota2.innerHTML = nota2

    const media = novaLinha.insertCell(4)
    media.innerHTML = (nota1 + nota2)/2
}

function botaoClicado(event){
    event.preventDefault(); // Prevent the default form submission behavior
    
    const meuFormulario = document.getElementById("formulario")
    const formData = new FormData(meuFormulario)

    const nome = formData.get("name")
    const matricula = formData.get("matricula")
    const nota1 = formData.get("nota1")
    const nota2 = formData.get("nota2")

    adicionaLinhaTabela(nome, matricula, nota1, nota2)
}

const meuBotao = document.getElementById('meuBotao');
meuBotao.addEventListener('click', botaoClicado);
