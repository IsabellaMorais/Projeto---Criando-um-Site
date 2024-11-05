const produtos = [
    { nome: "Tônico Facial", preco: 96.00 },
    { nome: "Cleansing Oil", preco: 90.00 },
    { nome: "Espuma de Limpeza", preco: 78.00 }
];

let carrinho = [
    { ...produtos[0], quantidade: 2 },
    { ...produtos[1], quantidade: 1 }
];

function atualizarCarrinho() {
    const itensCarrinho = document.getElementById("itens-carrinho");
    itensCarrinho.innerHTML = "";

    let totalFinal = 0;

    carrinho.forEach((item, index) => {
        const totalItem = item.preco * item.quantidade;
        totalFinal += totalItem;

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.nome}</td>
            <td>
                <input type="number" value="${item.quantidade}" min="1" onchange="alterarQuantidade(${index}, this.value)">
            </td>
            <td>R$ ${item.preco.toFixed(2)}</td>
            <td>R$ ${totalItem.toFixed(2)}</td>
            <td><button onclick="removerItem(${index})">Remover</button></td>
        `;
        itensCarrinho.appendChild(row);
    });

    document.getElementById("total-final").textContent = totalFinal.toFixed(2);
}

function alterarQuantidade(index, novaQuantidade) {
    if (novaQuantidade < 1) {
        novaQuantidade = 1;
    }
    carrinho[index].quantidade = novaQuantidade;
    atualizarCarrinho();
}

function removerItem(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

// Inicializa o carrinho
atualizarCarrinho();
