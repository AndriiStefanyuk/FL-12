function getMin() {
  let i = 0;
  let min_arg = arguments[0];
  for (; i < arguments.length; i++) {
    if (min_arg > arguments[i]) {
      min_arg = arguments[i];
    }
  }
  return min_arg;
}
getMin(8, -7, 1, 5);
