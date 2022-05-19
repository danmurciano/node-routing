const ExpressError = require('./expressError');

function validateInput(req) {
  console.log(req.query.nums);
  if (req.query.nums.length === 0) {
    throw new ExpressError("nums are required", 400);
  }
  const stringNums = req.query.nums.split(",");
  const nums = stringNums.map(n => Number(n));

  for (let i in nums) {
    if (Number.isNaN(nums[i])) {
      throw new ExpressError(`${stringNums[i]} is not a number`, 400);
    }
  }
  return nums;
}


function findMean(nums) {
  const sum = nums.reduce(function (acc, num) {
    return acc + num;
  });
  const mean = sum / nums.length;

  return mean;
}


function findMedian(nums) {
  let median;
  nums.sort( (a,b) => a - b);

  const mid = Math.floor(nums.length / 2);
  if (nums.length % 2 !== 0) {
    median = nums[mid];
  } else {
    median = (nums[mid] + nums[mid-1]) / 2
  }
  return median;
}


function findMode(nums) {
  let frequent = { key: null, frequency: 0 }
  const uniques = new Set(nums);
  uniques.forEach(key => {
    currentKeyFrequency = nums.filter(n => n === key).length;
    if (currentKeyFrequency > frequent.frequency) {
      frequent.key = key;
      frequent.frequency = currentKeyFrequency;
    }
  });
  return frequent.key;
}


module.exports = { validateInput, findMean, findMedian, findMode };
