var numberOfNumbers = 0;
var clearDat = false;
var numberArray = [];
var symbolArray = [];
var tmpNumStr = [];
var pos = 0
function num(number) {
  if (numberOfNumbers < 9){
    if (clearDat){
      numberOfNumbers++;
      clearDat = false;
      tmpNumStr.push(number)
    } else {
      numberOfNumbers++
      tmpNumStr.push(number)
      }
    tmps = tmpNumStr.join('')
    numberArray[pos] = tmps;
    pushToDis();
  }
}
function plusOrminus(){
  numberArray[pos] = (numberArray[pos] * -1)
  pushToDis()
}
function oper(symbol){
  symbolArray.push(symbol);
  numberOfNumbers = 0;
  pos++
  tmpNumStr = []
  pushToDis()
}
function equals(){
  let answer = eval(document.getElementById('displayscreen').value);
  clearDat = true;
  document.getElementById('displayscreen').value = answer
}
function clears(){
  clearDat = true;
  numberOfNumbers = 0;
}
function pushToDis(){
  let outStr = [];
  let numNum = 0
  let symNum = 1
  for (nums in numberArray){
    outStr[numNum] = numberArray[nums].toString();
    numNum += 2;
  }
  for (syms in symbolArray){
    outStr[symNum] = symbolArray[syms].toString();
    numNum += 2;
  }
  finalStr = outStr.join('');
  document.getElementById('displayscreen').value = finalStr;
}
function (percentage){
  numberArray[numberArray.legnth -1] = (numberArray[numberArray.legnth -1] / 100)
}
