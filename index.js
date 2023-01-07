// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.
// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.
// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

// function correct(string) {
//     return string.replace(/0/g, "O")
//                  .replace(/5/g, "S")
//                  .replace(/1/g, "I");
// }
// console.log(correct("bl00d"))

// =====================================================================


// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.
// The input array will always be valid! (odd-length >= 3)
// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3
 
// function stray(numbers) {
//     sorted = numbers.sort((a,b) => a-b)
//     for (let i=0; i<numbers.length; i++){
//         if(sorted[0] !== sorted[1]){
//             return sorted[0]
//         }return sorted[sorted[i].length-1]
//     }
// }
// console.log(stray([1,1,2]))
// console.log(stray([17,17,3,17,17,17,17]))
// stray([17, 17, 3, 17, 17, 17, 17])


// =====================================================================


// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// For example,
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

// =====================================================================


// const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     job: 'Instructor and Developer',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'React',
//       'Redux',
//       'Node',
//       'MongoDB',
//       'Python',
//       'D3.js'
//     ],
//     languages: ['Amharic', 'English', 'Suomi(Finnish)']
//   }
//   // Let us create a function which give information about the person object without destructuring
  
//   const getPersonInfo = obj => {
//     const skills = obj.skills
//     const formattedSkills = skills.slice(0, -1).join(', ')
//     const languages = obj.languages
//     const formattedLanguages = languages.slice(0, -1).join(', ')
  
//     personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${
//       obj.age
//     } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${
//       skills[skills.length - 1]
//     }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`
  
//     return personInfo
//   }
//   console.log(getPersonInfo(person))

// =====================================================================


// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// Examples:
// const solution = (firstArg, secondArg) => firstArg.endsWith(secondArg)

// console.log(solution('abc', 'bc')) // returns true
// console.log(solution('abc', 'd')) // returns false


// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]
// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]
// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
// const sortString = ["Telescopes", "Glasses", "Eyes", "Monocles"]

// const sorted = sortString.sort()

// console.log(sorted)

// function sortByLength (array) {
//     return array.sort((a,b) => a.length - b.length);
//   };
//   console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]))

// =====================================================================

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

// function descendingOrder(n){
//     tostring = n.toString().split('')
//     sorted = tostring.sort((a,b) => b-a)
//     result = sorted.map((num) => Number(num))
//     return parseInt(result.toString().replace(/,/g, ''))
// }
//   console.log(descendingOrder(42145))

//   =======================================================

// our start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.
// The Task
// Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
// The Database
// english: 'Welcome',
// czech: 'Vitejte',
// danish: 'Velkomst',
// dutch: 'Welkom',
// estonian: 'Tere tulemast',
// finnish: 'Tervetuloa',
// flemish: 'Welgekomen',
// french: 'Bienvenue',
// german: 'Willkommen',
// irish: 'Failte',
// italian: 'Benvenuto',
// latvian: 'Gaidits',
// lithuanian: 'Laukiamas',
// polish: 'Witamy',
// spanish: 'Bienvenido',
// swedish: 'Valkommen',
// welsh: 'Croeso'

// Possible invalid inputs include:

// IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address
// IP_ADDRESS_NOT_FOUND - ip address not in the database
// IP_ADDRESS_REQUIRED - no ip address was supplied


// var langs = {
// 'english': 'Welcome',
// 'czech': 'Vitejte',
// 'danish': 'Velkomst',
// 'dutch': 'Welkom',
// 'estonian': 'Tere tulemast',
// 'finnish': 'Tervetuloa',
// 'flemish': 'Welgekomen',
// 'french': 'Bienvenue',
// 'german': 'Willkommen',
// 'irish': 'Failte',
// 'italian': 'Benvenuto',
// 'latvian': 'Gaidits',
// 'lithuanian': 'Laukiamas',
// 'polish': 'Witamy',
// 'spanish': 'Bienvenido',
// 'swedish': 'Valkommen',
// 'welsh': 'Croeso'
// };

// function greet(lang) {
// 	return langs[lang]||langs['english'];
// }
// console.log(greet('polish'))


// =====================================================


// function isPalindrome(x) {
//     reversed = x.split('').reverse().join('')
//     if(x == reversed){
//       return "true"
//     } return "false"
//   }
//   console.log(isPalindrome("monkey"))
//   console.log(isPalindrome("madam"))

// =============================================

// Count the number of divisors of a positive integer n.
// Random tests go up to n = 500000.
// Examples (input --> output)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
// Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.

// function getDivisorsCnt(n) {
//     let div = [];
//     for(var i = 1; i <= n; i++) {
//         if(n % i == 0) 
//         div.push(i);
//     }
//     return div.length;
//   }

//   console.log(getDivisorsCnt(4))
//   console.log(getDivisorsCnt(5))
//   console.log(getDivisorsCnt(12))
//   console.log(getDivisorsCnt(30))

// ===========================================
// We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N-1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:

// arr(5) // => [0,1,2,3,4]
// Note: The parameter is optional. So you have to give it a default value.

// const arr = (n = 0) => [...Array(n).keys()]
// console.log(arr(5))

// ===============================================

// DESCRIPTION:
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer

// function squareDigits(num){
//    return parseInt(num.toString().split('').map((element) => 
//         element ** 2
//     ).join(''));
//   }
//   console.log(squareDigits(9119))

// =============================================

// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// function squareSum(numbers){
//     sum = 0
//     const num = numbers.map((element) => 
//         element ** 2
//     );
//     const sumNum = num.map((num) => sum+=num)
//     return sum
// }
// console.log(squareSum([1,2,2]))

// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

// function removeUrlAnchor(url){
//     return url.replace(/#about/g, '')
//   }
//   console.log(removeUrlAnchor("www.codewars.com#about"))

// =====================================================

//   Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
 
// function smash (words) {
//     return words.join(' ') 
//  }
//  console.log(smash(['hello', 'world', 'this', 'is', 'great']))

// ===================================================================

// const names = ['Asabeneh', 'Brook', 'David', 'John']
// console.table(names)

// ============================================================

// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.
// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
   positives = []
   console.log(positives)
   negatives = []
   for (let i = 0; i < input.length; i++){
      if (input[i] > 0){
         return positives.push(input[i])
      }
      else if(input[i] < 0) {
         negatives.push(input[i])
      }
      return positives
   }
 }
 console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))
 