// ES5 Method
function vowels(str) {
  let re = new RegExp(/[aeiou]/gi);
  let count = str.match(re)
  console.log(count.length)

}

// ES6 Method
let vowel = (str) => (str.match(/[aeiou]/gi) || []).length;

// bobbyhadz
// https://bobbyhadz.com/blog/javascript-count-regex-matches
function vowelz(str) {
  let count = (str.match(/[aeiou]/gi))
  return count.length
}