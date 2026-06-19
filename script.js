let carrinho = [];

function comprar(produto){
    carrinho.push(produto);

    alert(`${produto} adicionado ao carrinho!`);

    document.getElementById("contador").textContent =
        `Carrinho (${carrinho.length})`;
}

function comprar(produto){
    carrinho.push(produto);

    let lista = document.getElementById("listaCarrinho");
    lista.innerHTML = "";

    carrinho.forEach(item => {
        lista.innerHTML += `<li>${item}</li>`;
    });
}

function pesquisar(){
    let termo = document.getElementById("pesquisa").value.toLowerCase();

    let produtos = document.querySelectorAll(".produto");

    produtos.forEach(produto => {
        if(produto.textContent.toLowerCase().includes(termo)){
            produto.style.display = "block";
        }else{
            produto.style.display = "none";
        }
    });
}

let total = 0;

function comprar(produto, preco){
    carrinho.push(produto);
    total += preco;

    document.getElementById("total").textContent =
        `Total: R$ ${total.toFixed(2)}`;
}

function trocarTema(){
    document.body.classList.toggle("escuro");

    let btn = document.getElementById("temaBtn");

    if(document.body.classList.contains("escuro")){
        btn.textContent = "☀️ Claro";
    }else{
        btn.textContent = "🌙 Escuro";
    }
}