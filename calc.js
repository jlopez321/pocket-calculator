var numberOfNumbers = 0
function num(number) {
  if (numberOfNumbers < 9){
    document.getElementById('displayscreen').value = document.getElementById('displayscreen').value + number;
    numberOfNumbers++
  }
}
function oper(symbol){
  document.getElementById('displayscreen').value = document.getElementById('displayscreen').value + symbol;
  numberOfNumbers = 0;
}
function equals(){
  let answer = eval(document.getElementById('displayscreen').value)
  document.getElementById('displayscreen').value = answer
}
function clears(){
  document.getElementById('displayscreen').value = 0;
  numberOfNumbers = 0;
}
