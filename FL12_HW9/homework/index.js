const one = 1;
const two = 2;
const three = 3;
const five = 5;
const eight = 8;
const actors = [
  { name: 'tommy', age: 36 },
  { name: 'lee', age: 28 }
];
const thirty = 30;



function convert() {
  let array = [];
  let arr_item;
  let i;
  for (i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === 'number') {
      arr_item = String(arguments[i]);
      array.push(arr_item);
    } else {
      arr_item = parseInt(arguments[i]);
      array.push(arr_item);
    }
  }
}
convert('1', two, three, '4');


function executeforEach(array, callback) {
  let i;
  for (i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}
executeforEach([one, two, three], function(el) {
  console.log(el * two);
});


function mapArray(array, callback) {
  let res_arr = [];
  executeforEach(array, function(el) {
    res_arr.push(callback(parseInt(el)));
  });
  return res_arr;
}
mapArray([two, '5', eight], function(el) {
  return el + three;
});

function filterArray(array, callback) {
  let res_arr = [];
  executeforEach(array, function(el) {
    if (callback(el)) {
      res_arr.push(el);
    }
  });
  return res_arr;
}
filterArray([two, five, eight], function(el) {
  return el % two === 0;
});


function flipOver(inp_str) {
  let res_str = '';
  let i;
  for (i = inp_str.length - 1; i >= 0; i--) {
    res_str = res_str + inp_str[i];
  }
  return res_str;
}
flipOver('Hello world');


function makeListFromRange(inp_arr) {
  let res_arr = [];
  let i;
  for (i = inp_arr[0]; i <= inp_arr[inp_arr.length - 1]; i++) {
    res_arr.push(i);
  }
  return res_arr;
}
makeListFromRange([two, five]);


function getArrayOfKeys(objects, key) {
  let res_arr = [];
  executeforEach(objects, function(el) {
    res_arr.push(el[key]);
  });
  return res_arr;
}
getArrayOfKeys(actors, 'age');


function substitute(inp_arr) {
  return mapArray(inp_arr, function(el) {
    if (el < thirty) {
      return '*';
    } else {
      return el;
    }
  });
}
substitute([eight, three, thirty]);



  function getPastDay(date, daysAmount) {
    const msPerDay = 86400000;
    return new Date(date.getTime() - daysAmount * msPerDay).getDate();
  }
  {
    const year = 2019;
    const day = 2;
    const date = new Date(year, 0, day);
    console.log(getPastDay(date, two));
    console.log(getPastDay(date, three));
   
  }



function formatDate(date) {
  const ten = 10;
  const year = date.getFullYear();
  const month = date.getMonth() + one;
  const days = date.getDate();
  let hours = date.getHours();
  if (hours < ten) {
    hours = '0' + hours;
  }
  let minutes = date.getMinutes();
  if (minutes < ten) {
    minutes = '0' + minutes;
  }

  return year + '/' + month + '/' + days + ' ' + hours + ':' + minutes;
}
console.log(formatDate(new Date('6/15/2018 09:15:00')));
console.log(formatDate(new Date()));
