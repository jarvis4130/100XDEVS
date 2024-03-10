/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

// function countVowels(str) {

//   const arr=['a','e','i','o','u'];
//   const Str=str.toLowerCase().split('')
//   let ans=0;
//   Str.forEach((i)=>{
//     arr.map((el)=>{
//       if(el===i){
//         ans+=1;
//       }
//     })
//   })
//   return ans;
// }

function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const lowercasedStr = str.toLowerCase();

  let count = 0;

  for (const char of lowercasedStr) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

module.exports = countVowels;