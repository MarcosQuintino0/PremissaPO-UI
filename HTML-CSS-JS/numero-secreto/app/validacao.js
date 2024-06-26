function verifcaSeOChutePossuiUmValorValido() {
  const numero = +chute;

  if (chuteForInvalido(numero)) {
    elementoChuto.innerHTML += "<div>Valor inválido</div>";
    return;
  }
  if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
    elementoChuto.innerHTML += `<div>Valor inválido: o numero secreto está entre  ${menorValor} e  ${maiorValor}`;
    return;
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `<h2> Você Acertou! </h2> 
    <h3>O numero secreto era ${numeroSecreto} </h3>
    <button id="jogar-novamente" class="btn-jogar"> Jogar Novamente</button>`
  } else if (numero > numeroSecreto) {
    elementoChuto.innerHTML += `<div>O número secreto é menor</div>`
  } else (numero < numeroSecreto) {
    elementoChuto.innerHTML += `<div>O número secreto é maior</div>`
  }
}

function chuteForInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido() {
  return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
})
