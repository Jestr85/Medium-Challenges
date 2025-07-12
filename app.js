// Q1. Falsy or Truthy?

function filterOutFalsy(num1, num2) {
    return !num1 ? num1 : num2
}
console.log(filterOutFalsy(0, 5))



// Q2. Return the length of any given array

function arrlength(arr) {
    return arr.length
}
console.log(arrlength([5, 0, -4, 1]))



// Q3. Get the last element in an array

function lastElem(elem) {
    return elem[elem.length - 1]
}
console.log(lastElem([3, 2, 0, 6, 2]))



// Q4. Find the sum of an array

function arrSum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; ++i) {
        sum = sum + arr[i]
    }
    return sum
}
console.log(arrSum([100, 200, 500]))



// Q5. Add up the numbers from a single number

function progressiveSum(num) {
    let sum = 0
    for (let i =1; i <= num; ++i) {
        sum = sum + i
    }
    return sum
}

console.log(progressiveSum(4))



// Q6. Calculate the time

function calcTime(seconds) {
    let timerMinutes = Math.floor(seconds / 60)
    let timerSeconds = seconds % 60
    if (timerMinutes.toString().length === 1) {
        timerMinutes = '0' + timerMinutes
    }
    if (timerSeconds.toString().length === 1) {
        timerSeconds = '0' + timerSeconds
    }
    return timerMinutes + ':' + timerSeconds
}
console.log(calcTime(68))



// Q7. Find the largest number

function getMax(arr) {
    let max = arr[0]
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}
console.log(getMax([-100, -200, -300]))



// Q8. Reverse a string

function reverseString(str) {
    return str.split('').reverse().join('')
}
console.log(reverseString('awesome'))



//Q9. Turn every element in an array into 0

function convertToZeros(arr) {
    return new Array(arr.length).fill(0)
}
console.log(convertToZeros([5, 100, 20, 44]))



//Q10. Filter out all the apples

function removeApples(fruit) {
    return fruit.filter(elem => elem !== 'apple')
}
console.log(removeApples(['tomato', 'orange', 'apple', 'banana']))



//Q11. Filter out all the falsy values//

function removeFalsy(arr) {
    return arr.filter(elem => !!elem === true)
}
console.log(removeFalsy(['', [], NaN, 500, null, false, 0]))



//Q12. Truthy to true, Falsy to false

function convertToBoolean(arr) {
    return arr.map(elem => !!elem)
}
console.log(convertToBoolean(['', NaN, false, null, 0, []]))