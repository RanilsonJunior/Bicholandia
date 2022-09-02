function getProdutos() {
  fetch("./produtos.json")
    .then((response) => response.json())
    .then((dados) => {
      dados.map((produto) => mostrarProduto(produto));
    });
}

function mostrarProduto(produto) {
    console.log(produto);

  const slider = document.querySelector(".slider");
  slider.innerHTML += `
                <div class="card">
                    <div class="card-content">
                        <img src="/img/produtos/produto1.png" alt="ração" class="card-img">
                        <h2 class="card-title">${produto.nameProduct}</h2>
                        <div class="card-body">
                            <div class="card-star">
                                <span class="rating-value">${produto.numberStar}</span>
                                <span class="star">&#9733;</span>
                            </div>
                            <p class="card-price">R$${produto.newValue}</p>
                        </div>
                        <div class="card-footer">
                            <a href="produto.html?=id${produto.id}"><button class="botao botao-buy">Compre Agora</button></a>
                            <button class="botao botao-add">Add Carrinho</button>
                        </div>
                    </div>
                </div>
        `;
}
