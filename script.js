const form = document.getElementById('form');

form.addEventListener('submit', event => {
  event.preventDefault();

  // obter os valores dos inputs
  const num1 = parseFloat(document.getElementById('num1').value)
  const num2 = parseFloat(document.getElementById('num2').value)

  // fazer a operação e mostrar o resultado
  const soma = num1 + num2;

  alert('a soma dos numeros é ' + soma)

})


