function isBigger(a, b) {
  return a > b;
}
isBigger(9, 7);

function isSmaller(a, b) {
  return !isBigger(a, b);
}
isSmaller(5, 7);
