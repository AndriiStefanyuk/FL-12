let a = prompt(
  'Let\'s try to identify triangle type. Enter length for "a" triangle side',
  ''
);
let b = prompt('Enter length for "b" triangle side', '');
let c = prompt('Enter length for "c" triangle side', '');

if (
  a === '' ||
  a === null ||
  b === '' ||
  b === null ||
  c === '' ||
  c === null
) {
  alert('input values should be ONLY numbers');
} else {
  a = parseInt(a);
  b = parseInt(b);
  c = parseInt(c);
  if (
    a === 0 ||
    a < 0 ||
    isNaN(a) ||
    b === 0 ||
    b < 0 ||
    isNaN(b) ||
    c === 0 ||
    c < 0 ||
    isNaN(c)
  ) {
    alert('A triangle must have 3 sides with a positive definite length');
  } else if (a + b <= c || a + c <= b || c + b <= a) {
    alert('Triangle doesn’t exist');
  } else if (a === b && b === c) {
    alert('Equilateral triangle');
  } else if (a === b || b === c || a === c) {
    alert('Isosceles triangle');
  } else {
    alert('Scalene triangle');
  }
}
