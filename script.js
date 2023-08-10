function descobrirIMC(event) {
  event.preventDefault();
  const peso = document.getElementById("peso");
  const altura = document.getElementById("altura");
  const listaEL = document.getElementById("lista");
  console.log(peso.value);
  console.log(altura.value);

  const resultado = peso.value / altura.value ** 2;
  if (isNaN(resultado) || !isFinite(resultado)) {
    listaEL.innerHTML = `<li>Valor Inválido</li>`;
  } else {
    listaEL.innerHTML = `<li>${resultado.toFixed(2)}</li>`;
  }

  if (resultado < 18.5) {
    listaEL.innerHTML += `<li>Abaixo do Peso</li>`;
  } else if (resultado >= 18.5 && resultado < 25) {
    listaEL.innerHTML += `<li>Peso Normal</li>`;
  } else if (resultado >= 25 && resultado < 30) {
    listaEL.innerHTML += `<li>Acima do Peso</li>`;
  } else if (resultado >= 30 && resultado < 35) {
    listaEL.innerHTML += `<li>Obesidade Grau 1</li>`;
  } else if (resultado >= 35 && resultado < 40) {
    listaEL.innerHTML += `<li>Obesidade Grau 2</li>`;
  } else if (resultado >= 40 && resultado < 100) {
    listaEL.innerHTML += `<li>Obesidade Grau 3</li>`;
  } else {
    listaEL.innerHTML += `<li>Valor Inválido</li>`;
  }

  peso.value = "";
  altura.value = "";
}

function informacoes(event) {
  event.preventDefault();

  const mensagem =
    "Valores abaixo de 18,5 = Abaixo do Peso\nValores maiores que 18,5 e menor que 25 = Peso Normal\nValores maiores que 25 e menor que 30 = Acima do Peso\nValores maiores que 30 e menor que 35 = Obesidade Grau 1\nValores maiores que 35 e menor que 40 = Obesidade Grau 2\nValores maiores que 40 = Obesidade Grau 3";
  alert(mensagem);
}
