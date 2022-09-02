function getProdutos(id) {
  fetch("./produtos.json")
    .then((response) => response.json())
    .then((dados) => {
      dados.map((produto) => {
        if (id > 0) {
          if (produto.id == id) {
            console.log("achou o id");
            mostraProduto(produto);
          }
        } else {
          mostraProduto(produto);
        }
      });
    });
}

function getProdutoDetalhe() {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());

  console.log(params);
  getProdutos(params.id);
}

function mostraProduto(produto) {
  //   console.log(produto);

  const root = document.querySelector("#root");
  root.innerHTML += `
        
        `;
}
