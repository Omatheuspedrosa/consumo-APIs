const produto = {
    "descricao": document.querySelector('#descricao').value,
    "preco": document.querySelector('#preco').value
};

function cadastraProduto(produto) {
  
    const requisicao = new Request("http://localhost:3000/produtos", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    "body": JSON.stringify(produto),
  });

  fetch(requisicao)

}

document.querySelector('#btAdd').addEventListener('click', cadastraProduto(produto));
