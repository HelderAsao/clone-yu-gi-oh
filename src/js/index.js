
const btnVoltar = window.document.getElementById('btn-voltar')
const btnAvancar = window.document.getElementById('btn-avancar')
const cartoes = window.document.querySelectorAll('.cartao') //criou uma variavel pra varias classes com o mesmo nome 'cartao'
let cartaoAtual = 0;

cartoes.forEach (cartao => {

  console.log(cartao);
    cartao.addEventListener('click', function(){
      console.log('clicou')

      const cartaVirada = cartao.querySelector('.carta-virada')

      //virar o cartao

      cartao.classList.toggle('virar');

      //mostrar o fundo da carta

      cartaVirada.classList.toggle('mostrar-fundo-carta');

      const descricao = cartao.querySelector('.descricao')

      descricao.classList.toggle('esconder')


    })

} )//para cada cartao, e a memsa coisa q addeventlistenner so q pra cada um

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
