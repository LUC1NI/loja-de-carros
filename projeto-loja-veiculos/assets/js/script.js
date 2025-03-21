document.addEventListener("DOMContentLoaded", function() {
    // Validação do formulário na página de contato
    const formulario = document.getElementById("formularioContato");
    if (formulario) { // Só executa se o formulário existir
        formulario.addEventListener("submit", function(event) {
            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensagem = document.getElementById("mensagem").value.trim();

            if (!nome || !email || !mensagem) {
                alert("Por favor, preencha todos os campos.");
                event.preventDefault(); // Impede o envio do formulário
            } else if (!/\S+@\S+\.\S+/.test(email)) {
                alert("Por favor, insira um e-mail válido.");
                event.preventDefault(); // Impede o envio do formulário
            } else {
                alert("Mensagem enviada com sucesso!");
            }
        });
    }

    // Filtro na página de veículos
    const precoMaximoInput = document.getElementById("preco-maximo");
    const filtrarButton = document.getElementById("filtrar");
    const limparFiltroButton = document.getElementById("limpar-filtro");
    const veiculos = document.querySelectorAll(".veiculo");
    const mensagemVeiculo = document.getElementById("mensagem-veiculo");

    if (precoMaximoInput && filtrarButton && limparFiltroButton && veiculos) {
        filtrarButton.addEventListener("click", function() {
            const precoMaximo = parseFloat(precoMaximoInput.value);
            let encontrado = false;

            if (!isNaN(precoMaximo)) {
                veiculos.forEach(veiculo => {
                    const preco = parseFloat(veiculo.getAttribute("data-preco"));
                    if (preco <= precoMaximo) {
                        veiculo.style.display = "block"; // Mostra o veículo
                        encontrado = true;
                    } else {
                        veiculo.style.display = "none"; // Esconde o veículo
                    }
                });

                // Mostra ou esconde a mensagem de "nenhum veículo encontrado"
                if (!encontrado) {
                    mensagemVeiculo.style.display = "block";
                } else {
                    mensagemVeiculo.style.display = "none";
                }

                // Exibe o botão "Limpar Filtro"
                limparFiltroButton.style.display = "inline-block";
            }
        });

        limparFiltroButton.addEventListener("click", function() {
            // Limpa o campo de preço máximo
            precoMaximoInput.value = "";

            // Exibe todos os veículos novamente
            veiculos.forEach(veiculo => veiculo.style.display = "block");

            // Esconde a mensagem e o botão "Limpar Filtro"
            mensagemVeiculo.style.display = "none";
            limparFiltroButton.style.display = "none";
        });
    }
});
