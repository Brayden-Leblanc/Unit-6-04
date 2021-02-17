let a = 0
let b = 0
let h = 0
let button = 0

document.getElementById('calculate').addEventListener('click', formula)

function formula () {
  a = document.getElementById('avalue').value
  b = document.getElementById('bvalue').value
  h = document.getElementById('hvalue').value

  a = parseInt(a)
  b = parseInt(b)
  h = parseInt(h)

  button = (a + b) / 2 * h

  alert(button)
}
