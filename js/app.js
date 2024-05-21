let totalGeral;
limpar();

function adicionar(){
    //pegar produto e atributos
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('$')[1];
    //pegar quantidade
    let quantidade = document.getElementById('quantidade').value;
    if(quantidade<=0){
        alert('Por favor informe uma quantidade válida!');
        return;
    }
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
    </section>`

    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total'); 
    campoTotal.textContent = `R$ ${totalGeral}`;


    document.getElementById('quantidade').value = '0';


}

function limpar(){
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0,00';
    document.getElementById('quantidade').value = '0'; 
    totalGeral = 0;
}