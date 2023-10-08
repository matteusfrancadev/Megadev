
const button = document.querySelector('.prize-draw')

function raffle() {
  const min = Math.ceil(document.querySelector('.min').value)
  const max = Math.floor(document.querySelector('.max').value)
  const result = Math.floor(Math.random() * (max - min + 1)) + min

  if (min == '' || max == '' ) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'O Campo está vazio!',
    })
  }
  else{
    Swal.fire(
      'Very Good!',
      'Esse é o seu Número Sorteado:' + "\n" + result,
      'success',
    )
  }
}

button.addEventListener('click', raffle)