function exibirDados() {
    // captura os valores dos inputs
    let nome = document.getElementById ('nome').value;
    let tel= document.getElementById ('movel').value;
    let email= document.getElementById ('email').value;

// usando document.write para exibir os dados na página
    document.write('<h2>Dados Recebidos: </h2>')
    document.write('<p><strong>Nome:</strong> '+ nome + '</p>')
    document.write('<p><strong>Telefone:</strong> '+ tel + '</p>')
    document.write('<p><strong>Email:</strong> '+ email + '</p>')
}