// <button type="button" id="btAdd">Adicionar</button>
const btAdd = document.createElement('button');
btAdd.type = 'button';
btAdd.id = 'btAdd';
btAdd.innerHTML = "Adicionar";

const inputs = [
    {"type": "text", "id": "preco", "label": "Preço"},
    {"type": "text", "id": "descricao", "label": "Descrição"},
    {"type": "text", "id": "IdProduto", "label": "ID"}
];

const divInputs = inputs.forEach(produto => {
    const div = document.createElement('div');
    div.classList.add('controle-form');

    const i = document.createElement('input');
    i.type = produto.type;
    i.id = produto.id;

    const l = document.createElement('label');
    l.for = produto.id;
    l.innerHTML = produto.label;

    div.append(l, i)
})

// // <input type="text" id="preco">
// const inputPreco = document.createElement('input');
// inputPreco.type = 'texto';
// inputPreco.id = 'preco';

// // <label for="preco">Preço</label>
// const labelPreco = document.createElement('label');
// labelPreco.for = 'preco';
// labelPreco.id = 'Preço';

const divForm = document.createElement('form');
divForm.append(divInputs, btAdd);