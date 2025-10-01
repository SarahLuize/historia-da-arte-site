document.addEventListener("DOMContentLoaded", function () {
    // Garante que o JavaScript seja executado após o HTML carregar completamente.

    // Função de verificação das checkboxes
    function verificarCheckboxes() {
        var checkboxes = document.querySelectorAll('input[name="artistas"]:checked');
        return checkboxes.length > 0;  // Retorna true se pelo menos uma checkbox estiver marcada
    }

    // Função de verificação do formulário (campos obrigatórios)
    function validarFormulario() {
        const nome = document.getElementById("fname").value;
        const email = document.getElementById("email").value;
        const obras = document.getElementById("obras").value;
        const periodo = document.querySelector('input[name="periodo"]:checked');

        // Verifica se todos os campos obrigatórios foram preenchidos
        if (!nome || !email || !obras || !periodo) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return false;
        }

        // Verifica se pelo menos uma checkbox foi marcada
        if (!verificarCheckboxes()) {
            alert("Por favor, selecione ao menos um artista de interesse.");
            return false;
        }

        return true;  // Se todas as validações passarem, retorna true
    }

    // Evento de clique no botão de envio
    document.querySelector('form').addEventListener('submit', function (event) {
        // Impede que o formulário seja enviado para que possamos fazer a validação primeiro
        event.preventDefault();

        // Verifica se o formulário e as checkboxes estão corretos
        if (validarFormulario()) {
            alert('Tudo ok!');
            // Se as validações estiverem corretas, chama a função do quiz
            enviarRespostas();
        }
    });

    ///////// QUIZ - Função para enviar as respostas do quiz /////////

    // Pergunta 1
    // Adiciona um ouvinte de evento para o botão de envio da primeira pergunta
    document.getElementById("submit-btn").addEventListener("click", function () {
        // Obtém a resposta do usuário selecionada para a primeira pergunta
        const userAnswer1 = document.querySelector('input[name="answer1"]:checked');
        // Obtém o elemento onde o resultado será mostrado
        const resultDiv1 = document.getElementById("result1");

        // Verifica se o usuário escolheu uma resposta
        if (userAnswer1) {
            // Se a resposta do usuário for a correta
            if (userAnswer1.value === "Leonardo Da Vinci") {
                // Exibe a mensagem de resposta correta e altera a cor para verde
                resultDiv1.textContent = "Resposta correta! Leonardo Da Vinci é o autor da Mona Lisa.";
                resultDiv1.style.color = "green";
            } else {
                // Se a resposta estiver errada, exibe a mensagem de erro e altera a cor para vermelha
                resultDiv1.textContent = "Resposta errada! A resposta correta é Leonardo Da Vinci.";
                resultDiv1.style.color = "red";
            }
        } else {
            // Se o usuário não escolher nenhuma resposta, exibe uma mensagem de alerta
            resultDiv1.textContent = "Por favor, escolha uma resposta para a primeira pergunta!";
            resultDiv1.style.color = "orange";
        }
    });

    // Pergunta 2
    // Adiciona um ouvinte de evento para o botão de envio da segunda pergunta
    document.getElementById("submit-btn2").addEventListener("click", function () {
        // Obtém a resposta do usuário selecionada para a segunda pergunta
        const userAnswer2 = document.querySelector('input[name="answer2"]:checked');
        // Obtém o elemento onde o resultado será mostrado
        const resultDiv2 = document.getElementById("result2");

        // Verifica se o usuário escolheu uma resposta
        if (userAnswer2) {
            // Se a resposta do usuário for a correta
            if (userAnswer2.value === "Impressionismo") {
                // Exibe a mensagem de resposta correta e altera a cor para verde
                resultDiv2.textContent = "Resposta correta! A obra 'A Noite Estrelada' é do período Impressionismo.";
                resultDiv2.style.color = "green";
            } else {
                // Se a resposta estiver errada, exibe a mensagem de erro e altera a cor para vermelha
                resultDiv2.textContent = "Resposta errada! A resposta correta é Impressionismo.";
                resultDiv2.style.color = "red";
            }
        } else {
            // Se o usuário não escolher nenhuma resposta, exibe uma mensagem de alerta
            resultDiv2.textContent = "Por favor, escolha uma resposta para a segunda pergunta!";
            resultDiv2.style.color = "orange";
        }
    });
});