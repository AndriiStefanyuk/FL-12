function makeNumber() {
  let str = arguments[0];
  let arr = str.split('');
  console.log(arr);
  let numbers = [];
  let i = 0;
  for (; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      numbers.push(arr[i]);
    }
  }
  let result = numbers.toString().replace(/,/g, '');
  return result;
}

function countNumbers(arg) {
  let resultcount = {};
  makeNumber(arg)
    .split('')
    .forEach(num => {
      Object.keys(resultcount).includes(num)
        ? (resultcount[num] += 1)
        : (resultcount[num] = 1);
    });
  return resultcount;
}
countNumbers('ghdfvg34nf54dnv113990');
