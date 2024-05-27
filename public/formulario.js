// <button type="button" id="btAdd">Adicionar</button>
const btAdd = document.createElement("button");
btAdd.type = "button";
btAdd.id = "btAdd";
btAdd.innerHTML = "Adicionar";

const inputs = [
  { type: "text", id: "preco", label: "Preço" },
  { type: "text", id: "descricao", label: "Descrição" },
  { type: "text", id: "IdProduto", label: "ID" },
];

function criaDivInputs(inputs) {
  const divForm = document.createElement("div");
  divForm.classList.add("form");

  inputs.forEach(produto => {
    const div = document.createElement("div");
    div.classList.add("controleForm");

    const i = document.createElement("input");
    i.type = produto.type;
    i.id = produto.id;

    const l = document.createElement("label");
    l.htmlfor = produto.id;
    l.innerHTML = produto.label;

    div.append(l, i);
    divForm.append(div);
  });

  return divForm;
}

const divForm = criaDivInputs(inputs);

divForm.append(btAdd);
document.body.append(divForm);
