function comprar(tag, preco) {
const telefone = '5518996769804';


const mensagem = `Olá! Gostaria de comprar: ${tag} - R$ ${preco}`; 


window.open(
`https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`,
'_blank'
);
}