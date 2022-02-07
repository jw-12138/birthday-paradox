let birthdayCount = 23

let runs = 1000

let results = []

let chances = []

function calcAverageChances(arr) {
  const sum = arr.reduce((a, b) => a + b, 0);
  return (sum / arr.length) || 0
}

function calcChances(arr) {
  let trues = 0
  arr.forEach(function (ele) {
    if (ele) {
      trues++
    }
  })
  
  return trues / arr.length
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomDate(){
  let bigMonth = [1, 3, 5, 7, 8, 10, 12]
  let month = getRandomInt(1, 13)
  let day
  if(bigMonth.includes(month)){
    day = getRandomInt(1, 32)
  }else{
    day = getRandomInt(1, 31)
  }
  if(month === 2){
    day = getRandomInt(1, 29)
  }
  
  return month + '/' + day
}

function hasDuplicates(array) {
  return (new Set(array)).size !== array.length;
}

let i = 0
let s = setInterval(function () {
  if (i === runs) {
    clearInterval(s)
    console.log("Average chance for " + birthdayCount + " people share the same birthday is: " + calcAverageChances(chances))
    
    return false
  }
  let birthdays = []
  for (let j = 0; j < birthdayCount; j++) {
    let day = getRandomDate()
    birthdays.push(day)
  }
  
  results.push(hasDuplicates(birthdays))
  console.log(calcChances(results))
  
  chances.push(calcChances(results))
  
  i++
}, 0)
