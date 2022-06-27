// ES5 Method
function sumArray(nums) {
  let numCheck = nums.every(e => typeof e === 'number');
  if (numCheck === false) {
    return (`${nums} is not a number ya damn fool`)
  } else
    for (i = 0; i <= nums.length; i++) {

    }
  return nums;
}

// ES6 Method
let sumArr = (nums) => {
  let numsT = 0;
  if (nums.every(e => typeof e !== 'number')) {
    return (`${nums} isnt a number, try again.`)
  } else
    for (let i of nums)
      numsT += i;
  return numsT;
}