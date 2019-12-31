function addTwo(x) {
  return x + 2;
}

function pipe() {
  let total = arguments[0];
  for (var i = 1; i < arguments.length; i++) {
    total = arguments[i](total);
  }
  return total;
}

pipe(1, addTwo);
pipe(1, addTwo, addTwo);
pipe(1, addTwo, addTwo, addTwo);
