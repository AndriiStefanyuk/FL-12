function makeNumber() {
  let str = arguments[0];
  let arr = str.split('');
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
makeNumber('uasb2ckjas5cskcb122sa3c');
