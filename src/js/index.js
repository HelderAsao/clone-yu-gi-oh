
const btnVoltar = window.document.getElementById('btn-voltar')
const btnAvancar = window.document.getElementById('btn-avancar')
const cartoes = window.document.querySelectorAll('.cartao') //criou uma variavel pra varias classes com o mesmo nome 'cartao'
let cartaoAtual = 0;


btnAvancar.addEventListener('click', function () {

 



  if (cartaoAtual === cartoes.length - 1)  return;

  esconderCartaoSelecionado();

  

  cartaoAtual++

  mostrarCartao(cartaoAtual);




})


btnVoltar.addEventListener('click',  function  () {



  if(cartaoAtual ===  0 ) return

 esconderCartaoSelecionado()

  

  cartaoAtual--

  mostrarCartao(cartaoAtual)
})

function mostrarCartao(cartaoAtual) {
  cartoes[cartaoAtual].classList.add('selecionado');
}

function esconderCartaoSelecionado() {
  const cartaoSelecionado = window.document.querySelector('.selecionado');
  cartaoSelecionado.classList.remove('selecionado');
}
