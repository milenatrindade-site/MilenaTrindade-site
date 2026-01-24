const telefone = '5518996769804';

function formatBRL(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function getCard(el) {
  return el.closest('.produto');
}

function calcularTotalDoCard(card) {
  const precoUnit = Number(card.dataset.preco); // ex: 22.00
  const qtd = Number(card.querySelector('[data-qtd]').textContent);
  const total = precoUnit * qtd;
  card.querySelector('[data-total]').textContent = formatBRL(total);
}

function mudarQtd(botao, delta) {
  const card = getCard(botao);
  const qtdEl = card.querySelector('[data-qtd]');
  let qtd = Number(qtdEl.textContent);

  qtd += delta;
  if (qtd < 1) qtd = 1;
  if (qtd > 99) qtd = 99;

  qtdEl.textContent = qtd;
  calcularTotalDoCard(card);
}

function comprar(btn) {
  const card = getCard(btn);

  const nome = card.dataset.nome;
  const precoUnit = Number(card.dataset.preco);
  const qtd = Number(card.querySelector('[data-qtd]').textContent);
  const total = precoUnit * qtd;

  const unidadeTxt = (qtd === 1) ? '1 unidade' : `${qtd} unidades`;

  const mensagem = `Olá! Gostaria de comprar: ${nome} / ${unidadeTxt} - ${formatBRL(total)}`;

  window.open(
    `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`,
    '_blank'
  );
}

// Atualiza o total de todos os cards quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.produto').forEach(card => calcularTotalDoCard(card));
});