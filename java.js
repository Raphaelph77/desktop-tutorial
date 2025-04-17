// Função para calcular o valor e mostrar o resumo
function calcularValor(event) {
    event.preventDefault(); // Impede o envio do formulário e recarregamento da página
  
    // Pega os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const servico = document.getElementById('servico').value;
    const data = document.getElementById('data').value;
    const quinzenal = document.querySelector('input[name="quinzenal"]:checked')?.value;
  
    // Preços dos serviços
    const precos = {
      corte: 40,
      corte_barba: 60,
      barba: 30
    };
  
    // Nome do serviço
    const nomesServicos = {
      corte: "Corte de cabelo",
      corte_barba: "Corte + barba",
      barba: "Barba"
    };
  
    // Calcula o valor
    let valor = precos[servico];
    let desconto = 0;
  
    if (quinzenal === "sim") {
      desconto = valor * 0.10;
      valor -= desconto;
    }
  
    // Formata a data para dd/mm/aaaa
    const dataFormatada = new Date(data).toLocaleDateString('pt-BR');
  
    // Formata o valor para R$
    const valorFormatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  
    // Monta o resumo
    const mensagem = 
  `Atendimento confirmado!
  Nome: ${nome}
  CPF: ${cpf}
  Serviço: ${nomesServicos[servico]}
  Data: ${dataFormatada}
  Atendimento quinzenal: ${quinzenal === "sim" ? "Sim" : "Não"}      Valor: ${quinzenal === "sim" ? "com desconto: " : ""}${valorFormatado}`;
  
    // Exibe no alert
    alert(mensagem);
  }
  
  // Adiciona o evento de submit ao formulário
  document.getElementById('formAtendimento').addEventListener('submit', calcularValor);
  