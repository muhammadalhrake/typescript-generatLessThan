// Import stylesheets
import './style.css';
//imports
import random from 'random';

//helper function
function between(min: number, max: number) {
  return random.int(min, max);
}
//test of generatLessThan function
function testOfGeneratLessThan(array: Array<number>) {
  let sum = 0;
  let testOn: boolean;
  for (let c = 0; c < array.length; c++) {
    sum += array[c];
  }
  if (sum < 10) {
    testOn = true;
  } else {
    testOn = false;
  }
  console.log(array);
  console.log('Some of digits :' + sum);
  console.log(testOn);
}
//main function
function generatLessThan(digitsNum: number) {
  let range = between(2, 9),
    first = between(1, range);
  let arrayOfNum = new Array();
  arrayOfNum.push(first);
  let numWeHave = range - first;
  for (let i = 1; i < digitsNum; i++) {
    if (i == digitsNum - 1) {
      if (numWeHave > 0) {
        arrayOfNum.push(numWeHave);
      } else {
        arrayOfNum.push(0);
      }
    } else {
      if (numWeHave > 0) {
        let sum = between(0, numWeHave);
        arrayOfNum.push(sum);
        numWeHave -= sum;
      } else {
        let sum = between(0, numWeHave);
        arrayOfNum.push(sum);
      }
    }
  }
  if(digitsNum>4&&first>1&&first<=5){
    arrayOfNum[0]-=1;
    let rand = between(0,2)
    arrayOfNum[(digitsNum-1)-rand]+=1;
    console.log("1")
    return arrayOfNum
  }else if(digitsNum>4&&first>5){
    arrayOfNum[0]-=2;
    let rand = between(0,2)
    arrayOfNum[(digitsNum-1)-rand]+=2;
    console.log("2")
    return arrayOfNum
  }
  return arrayOfNum;
}
/* setInterval(() =>testOfGeneratLessThan(generatLessThan(between(5,5))), 500); */

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
