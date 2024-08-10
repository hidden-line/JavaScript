let nums = [1, -5, 10, -20];

nums = nums.filter(value => value >= 0).map(value => value * 2);

console.log(nums);