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

// function countPositivesSumNegatives(input) {
//    positives = []
//    negatives = []
//    let array = []
//    negativesArray = 0
//    for (let i = 0; i < input.length; i++){
//       if (input[i] > 0){
//          positives.push(input[i])
//       }
//       else if(input[i] < 0) {
//          negatives.push(negativesArray += input[i])
//       }
//    }
//    array.push(positives.length)
//    array.push(negativesArray)
//    return array
//  }
// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))

// numbers = (1, 2, 3, 4, 5, 6, 7, 8, 9,)

// =================================================

// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// function solution(str){
//     return str.split('').reverse().join('').toString()
// }
// console.log(solution('world'))
// console.log(solution('word'))

// ==========================================================

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// function highAndLow(numbers){
//     num = numbers.split(" ")
//     sorted = num.map((value) => Number(value)).sort((a,b) => b - a)
//     highestandlowest = []
//     first = highestandlowest.push(sorted[0])
//     second = highestandlowest.push(sorted[sorted.length-1])
//     return highestandlowest.join(' ').toString()
// }
// console.log(highAndLow("1 2 3 4 5"))
// console.log(highAndLow("1 2 -3 4 5"))
// console.log(highAndLow("1 9 3 4 -5"))

// ========================================================================================

// let str = "1st place: Winnie6A zer"

// console.log(str.match(/\d|a/gi))

// ========================================================================================

// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.
// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// function findMultiples(int,limit){
//     let result = []

//     for (let i = int; i<=limit ; i+=int)
//       result.push(i)

//     return result
//   }

// ==================================================================================

// const list = [
//     {id:5, name: "deeone"},
//     {id:2, name: "bunmi"},
//     {id:6, name: "bayowa"}
// ]

// const result = list.sort((a,b) => a.id - b.id)
// console.log(result)

// =======================================================================================

// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
// Note: anagrams are case insensitive
// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
// Examples
// "foefet" is an anagram of "toffee"
// "Buckethead" is an anagram of "DeathCubeK"

//   function isAnagram(test, original) {

//     testelement = test.split('').sort().join('')
//     originalelement = original.split('').sort().join('')
//     for (let i = 0; i<test.length; i++){
//     for (let i = 0; i<test.length; i++){
//     if (testelement[i].includes(originalelement[i])){
//         return true
//     }else{
//         return false
//     }
// }
// };
//   }
// console.log(isAnagram("foefet", "toffee"))
// console.log(isAnagram("Buckethead", "DeathCubeK"))

// =================================================================================

// Given the triangle of consecutive odd numbers:
//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
// 1 -->  1
// 2 --> 3 + 5 = 8

// function rowSumOddNumbers(n) {
// 	return n*n*n
// }
// console.log(rowSumOddNumbers())

// ===============================================================================

// Write a function that always returns 5
// Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/
// Good luck :)

// function unsualfive(){
//     return "Jesus".length
// }
// let dato = unsualfive()
// console.log(dato)

// =================================================================================

// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.
// function getCount(str){
//     vowels = 'aeiou';
//     vowelslength = [];
//     for (let i = 0; i<str.length; i++){
//        for (let j = 0; j<vowels.length; j++){
//         if(str[i] == vowels[j]){
//             vowelslength.push(str[i])
//         }
//        }
// }
// return vowelslength.length
// }
// console.log(getCount("dayo"))

// =======================================================================================

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// function reverseWords(str) {
//     newStr =str.split(' ')
//     let newWord=''
//     newStr.map(char=>{
//     newWord += char.split('').reverse().join('')+" "
//   })
//     return newWord
//   }
//   console.log(reverseWords("This is an example!"))
//   console.log(reverseWords("double  spaces"))

// ==================================================================

// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

// function disemvowel(str) {
//   return str.replace(/[aeiou]/ig, '')
// }
// console.log(disemvowel("This website is for losers LOL!"));


// ==============================================================================


// 

// 2. CENTURY FROM YEAR
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Task
// Given a year, return the century it is in.
// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

// ===========================================================================================================

// 3. TOTAL AMOUNT OF POINTS
// Our football team has finished the championship.
// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.
// For example: ["3:1", "2:2", "0:1", ...]
// Points are awarded for each match as follows:
// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.
// Notes:
// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

// ===========================================================================================================

// 4. HIGHEST PROFIT WINS
// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.
// Task
// Write a function that returns both the minimum and maximum number of the given list/array.
// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]
// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.
        // function minMax(array){
        //     min = Math.min(...array)
        //     max = Math.max(...array)

        //     return [min,max]

        // }
        // console.log(minMax([1,2,3,4,5]))
        // console.log(minMax([2334454,5]))
        // console.log(minMax([1]))

        // ===========================================================================================================


// 5. A NEEDLE IN THE HAYSTACK
// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:
// Example(Input --> Output)
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
// Note: In COBOL, it should return "found the needle at position 6"  

// function findNeedle(array){
//     for (i=0; i<array.length; i++){
//         if(array[i] === "needle"){
//             return "found the needle at position" + " " + i
//         }
//     }
//                 // OR         
//     return "found the needle at position " + array.indexOf("needle");
// }

// const junkNeedle = (array) => {return "found the needle at position " + array.indexOf("needle")}

// console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))
// console.log(junkNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))

// ===========================================================================================================


// 6. DOUBLE CHAR
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "  

// function repeatString(str){
//     let result = ""
//     for (let i=0; i<str.length; i++){
//         result += str[i].repeat(2)   
//     }return result
// }
// console.log(repeatString("String"))
// console.log(repeatString("Hello World"))

// ===========================================================================================================


// 8. SQUARE EVERY DIGIT
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer (edited)

// function squareDigit(digits){
//     let result = digits.toString()
//     let result_two = ""
//     for (i=0; i<result.length; i++){
//     result_two += Math.pow(parseInt(result[i]),2)
        
//     }return result_two
   
// }
// console.log(squareDigit(9119))

// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.
// Considering these factors, write a function that tells you if it is possible to get to the pump or not.
// Function should return true if it is possible and false if not.

// ===========================================================================================================


// Implement the function accum(str) that takes string and returns the accumulated string by index.
// The parameter of accum is a string which includes only letters from a..z and A..Z.
// # Example
//    accum("abcd") -> "A-Bb-Ccc-Dddd"
//    accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// function accum(str) {
//     let letters = []
//     for(i=0; i<str.length; i++){
//         let ans = str[i].toUpperCase() + str[i].repeat(i)
//         letters.push(ans)
//     }
//     return letters.join('-')
//  }
//         console.log(accum("abcd"))
//         console.log(accum("RqaEzty"))
//         console.log(accum("cwAt"))

// ===========================================================================================================

// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.
// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
//0 <= s <= 59

// function past(h, m, s){
//     return ((h*3600)+(m*60)+s)*1000;
//   }
//   console.log(past(0,1,1))

// ===========================================================================================================

//   Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// Mind the input validation.
// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

// function sumArray(array){
    // min = Math.min(...array);
    // max = Math.max(...array);
    // let sum = 0
    // for (let i=0; i<array.length; i++){
    //     if(min !== array[i] &&  max !== array[i]){
    //          sum += array[i]
    //     }
    // }
    // return sum

                        // OR
                        
    // sorted = array.sort((a,b)=>(a-b))
    // sum = 0
    // for (let i=0; i<array.length; i++){
    //             if(sorted[0] !== array[i] && sorted[array.length-1] !== array[i]){
    //                     sum += array[i]
    //     }
    // }
    // return sum

// }
// console.log(sumArray([6,2,1,8,10]))

// ===========================================================================================================


// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

// function feast(beast, dish) {

//     if(beast[0] == dish[0] && beast[beast.length-1] == dish[dish.length-1]){
//         return true;
//     }
//     else {
//         return false
//     }
//     }
//     console.log(feast("parrot","peat"))

// ===========================================================================================================


//     In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

// function makeNegative(number){
//     if (number > 0){
//         return number * -1
//     }
//     else {
//         return number
//     }
// }
// console.log(makeNegative(-5))
// console.log(makeNegative(0))
// console.log(makeNegative(5))

// ===========================================================================================================

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// function abbrevName(name){
//  splited = name.split(" ")
//  initials = []
//  splited_one = splited[0][0] 
//  splited_two = splited[1][0]
//  initials.push(splited_one)
//  initials.push(splited_two)
//  console.log(initials)
//  console.log(initials.join('.'))
//  console.log(splited_one)
// //  console.log(splited[1][0])
// }
// abbrevName("patrick feeney")

// ===========================================================================================================


// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

// function squareRec(input1,input2){
//     if(input1 == input2){
//         return input1 * input2
//     }
//     else{
//         return (input1 + input2) * 2
//     }
// }
// console.log(squareRec(6,10))
// console.log(squareRec(3,3))

// ===========================================================================================================


// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
// None of the arrays will be empty, so you don't have to worry about that!

// function removed(array){
//     result = []
//     for (i = 0; i<=array.length; i++){
//         if (array[i] == 'keep'){
//             return result+=array[i]
//         }
//     }
//     // console.log(result)
// }
// console.log(removed(['keep','remove','keep','remove','keep','remove']))

// ===========================================================================================================

// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:
// time = 3 ----> litres = 1
// time = 6.7---> litres = 3
// time = 11.8--> litres = 5

// function numOfLitres(time){
//     return  Math.floor((time * 0.5))
    
// }
// console.log(numOfLitres(3))
// console.log(numOfLitres(6.7))
// console.log(numOfLitres(11.8))

// ===========================================================================================================

// Task
// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more detail about it)
// Example
// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.

// Notes
// The numbers are always positive.
// The numbers are in the range (1  ≤  a, b, c  ≤  10).
// You can use the same operation more than once.
// It's not necessary to place all the signs and brackets.
// Repetition in numbers may occur .
// You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.


// ===========================================================================================================

// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

// function allcaps(input){
//     if (input == input.toUpperCase()){
//         return "true"
//     }
//     else {
//         return "false"
//     }

//     // OR

//     String.prototype.isUpperCase=function() {return this==this.toUpperCase()}
// }
// console.log(allcaps("NAME"))

// ===========================================================================================================

// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

// function cuboid(l,w,h){
//     let volume = l * w * h
//     return volume
// }
// console.log(cuboid(5,6,7))

// ===========================================================================================================

// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]

// function greet(name){
//     return `hello, ${name} how are you doing today`
// }
// console.log(greet("dayo"))

// ===========================================================================================================

// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.

// function friend(array){
//     let friends = []
//     for (let i=0; i<array.length; i++){
//         if (array[i].length == 4 ){
//               friends.push(array[i])
//         }
//     }return friends

// }
// console.log(friend(["Ryan", "Kieran", "Mark"]))

// ===========================================================================================================

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// function pin(input){
//     if (input.length == /^\d{4}$/ || input.length == /^\d{6}$/){
//         return true
//     }
//     else 
//         {return false}
// }
// console.log(pin("1234"))
// console.log(pin("a345"))

// ===========================================================================================================

// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

// function findNextSquare(sq) {
//     let sqr = Math.sqrt(sq); 
//     console.log(sqr)
//     if(sqr % 1 == 0){
//       return Math.pow(sqr + 1, 2);
//      } 
//    return -1;
//   }

//   console.log(findNextSquare(121))
//   console.log(findNextSquare(625))
//   console.log(findNextSquare(114))

//   function isIsogram(str){
//     if(str.length == (new Set(str).size)){
//         return true
//     }else {
//         return false
//     }
//   }
//   console.log(isIsogram("Dermatoglyphics"))
//   console.log(isIsogram("moose"))

// ===========================================================================================================

//   Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

// function reverse(arr){
//     let reVersed = arr.reverse()
//     console.log(reVersed) 
// }
// reverse([3,5,2,3,1])

// ===========================================================================================================