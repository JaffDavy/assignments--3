// let first = 12
// let second = 2

// const sum = first + second

// console.log  ("the sum is: " + sum)


// let age = 25

// if (age > 25) {
//     console.log("you are old")
// }

// let time = 12

// if (time < 12) {
//     console.log ("good morning")
// }else {
//     console.log ("good afternoon")
// }

// let a = 2
// let b = 3
// let s = a*b 
// console.log(s)

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)

// let index = 0
// while (index < 10) {
//     console.log(index + 1)
//     index++
// }

// for (let countere = 0; countere <= 10; countere++) {
//      console.log(countere)
    
// }

//  let step =''
//  for (let p = 1; p <= 8; p++) {
//     for (let b = 0; b < p; b++) {
//         step += '*'
//     }
//     step += '\n'
//  }
//  console.log(step)


//  for (let s = 0; s < 8; s++) {
//     let chess = "";
//     for (let b = 0; b < 8 ; b++) {
//         if ((s + b) % 2 == 0) {
//             chess += " #";
//         } else {
//             chess += " ";
//         }
//     }
//     console.log(chess);
//  }

//  for (let z = 1; z < 101; z++) {
//     let num3 = z % 3
//     let num5 = z % 5
//     if (num3 == 0 && num5 == 0) {
//         console.log ("FizzBuzz")
//     } else if (num3 == 0) {
//         console.log ("Fizz")
//     } else if (num5 == 0) {
//         console.log ("Buzz")
//     } else {
//         console.log(z)
//     }
// }



// function minNumber(a, b) {
//      if (a < b) {
//         return "a is smaller"
//      } else {
//         return "b is smaller"
//      }
// }
// console.log(Math.min(6, 9))


// function maxNumber(a, b) {
//      if (a < b) {
//         return "b is greater"
//      } else {
//         return "a is greater"
//      }
// }
// console.log(Math.max(10, 20))


// function sum(a, b) {
//     return a + b
// }
// console.log(sum(5, 5))

// function greeting() {
//     let message = 'hi';

//     function sayhi() {
//         console.log(message)
//     }
//     return sayhi
// }
// let hi = greeting()
// hi()


// function greeting(message) {
//     return function (name) {
//         return message + ' ' + name
//     }
// }

// let sayHi = greeting('HI ')


// for(var index = 1; index <= 3; i++) {
//     setTimeout(function() {
//         console.log('after' + index + 'second(s):' + 1)
//     }
//     })
// }

// for (let index = 0; index <=  100; index++) {
//     (function (counter) {
//         setTimeout(function() {

//         }
//     })
    
// }

// let multiplier = 5
// var twice = multiplier (2)
// console.log(twice(5))

// function multiplier(a, b) {
//     return a*b
// }
// console.log(multiplier(2, 5))

// function multiplier (number) {
//    return function(sancho) {
//      return number * sancho
//    }
   
// }
// console.log(multiplier(2)(5))


// function one (num) {
//     return function(two) {
//         return num + two
//     }
// }
// console.log(one(2)(3))


// function fac(n) {
//   let factorial= 1
//   for (let i = 1; i <= n ; i++){
//     factorial *=i
//   }
//   return factorial
//   }
//     console.log(fac(5))
//     console.log(fac.sort)




// function arry(arr_num) {
//     const res =[]
''
//     return res;
// }
// console.log(arry([1,2,3,4]))



//Assigment 
// Write a function called isEven wc checks if a number is even or odd 
// Hint:  0 is even and 1 is oss, any other number N, its evennes is the sa,e as N-2
// Notice how this works when N is negative , try fixing it 

// Write a function to generate the first fibonacci number


// Write a function called countBs that takes a string as its only argument and returns a number that indicates how many uppercase "B" characters are in the string 
// write a function called countChar that behaves like countBs expects it takes a second argument rhat indicates the character thtat is to be counted

// let agea = [ 2 , 3 ,34 , 34 ,2, 8, 6]
// let sortedAges = ages.sort((a, b) => b - a)
// console.log(sortedAges)

// ages.forEach((iten) => console.log(item))


// let obj = {}
// obj.name = 'sanch'

// console.log(obj)

// let obj


// const radius = [1, 2, 3]
// const calculateArea = function (radius) {
//   const 
// }

//sets


// const letters = new Set ([1, 2, 3, 4])
// letters.add(5)
// letters.add(6)

// letters.forEach((numb) => console.log(numb))

// letters.values() // Iteratorr object containing all the values in the set
// const myIterator = letters.values()

// for (const n of myIterator) {
  // console.log(n)
// }

// console.log(typeof letters) // -> object
// console.log(letters instanceof Set) // true

// letters.delete(1)
// letters.clear() // to clear the array


// maps

// let mp = new Map()
// mp.set('first', 1)
// mp.set('second', 2)
// mp.set('third', 3)

// // console.log(mp)
// mp.get('first')





// write a js fxn wc takes an arry and returns the frequency of eqach arry element
// frequency ([1,1,2,3,4,5,5,5,3,3,3,4])
// 1 - 2
// 2 - 1
// 3 - 4
// 4 - 2
// 5 - 3


// let numb = ([1,1,2,3,4,5,5,5,3,3,3,4])
//   function ones(n) {
//    count = 1
//     for (let i = 1; i <= n; i++) {
//     count += i
//     }
//      return count
// }
// console.log(ones(1))

// function frequency (arr) {
//   arr.sort()

//   let count = 1
//   for (let index = 1; index < arr.length; index++) {
//     if (arr[index] == arr[index-1]) {
//       count++
//     } else {
//       console.log(arr[index-1] + " - " + count)
//       count = 1
//     }
//   }
//   console.log(arr[arr.length-1] + " - " + count)

// }
// frequency([1,1,2,3,4,5,5,5,3,3,3,4])


// const freqObj = (arr) => {
//   let count = {}
//   arr.forEach(e => count[e] ? count[e]++ : count[e] =1)
//   // console.log(count)
//     for(const [key, value] of Object.entries(count)){
//       console.log(key, value)
//     }

// }
// freqObj([1,1,2,3,4,5,5,5,3,3,3,4])

///////////////////////////////////////......ASSIGMENT DO THE SAME THING WITH MAPS................////////////////////////////////


// function calculateFrequency(arr) {
//   const frequencyMap = new Map();
//   arr.forEach((element) => {
//     frequencyMap.set(element, (frequencyMap.get(element) || 0) + 1);
//   });
//   const frequencyObject = {};
//   frequencyMap.forEach((value, key) => {
//     frequencyObject[key] = value;
//   });

//   return frequencyObject;
// }
// const inputArray = ([1,1,2,3,4,5,5,5,3,3,3,4])
// const result = calculateFrequency(inputArray);
// console.log(result);








//    DOME MANIPULATI0N

buttonElement.innerText = 'on'