let a = prompt(
  'Let\'s try to solve Quadratic equation ax2 + bx + c = 0. Enter value for "a", it should be numeric value but not 0',
  ""
);
let b = prompt('Enter value for "b", it should be numeric value', "");
let c = prompt('Enter value for "c", it should be numeric value', "");

if (
  a === "" ||
  a === null ||
  b === "" ||
  b === null ||
  c === "" ||
  c === null
) {
  console.log("Invalid input data");
} else {
  a = parseFloat(a);
  b = parseFloat(b);
  c = parseFloat(c);
  let D, x, x1, x2;
  const n = 4,
    k = 2;
  if (a === 0 || isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log("Invalid input data");
  } else {
    D = b * b - n * a * c;
    if (D === 0) {
      x = -b / (k * a);
      console.log("x=" + Math.round(x));
    } else if (D > 0) {
      x1 = (-b + Math.sqrt(D)) / (k * a);
      x2 = (-b - Math.sqrt(D)) / (k * a);
      console.log("x1=" + Math.round(x1) + " and " + "x2=" + Math.round(x2));
    } else if (D < 0) {
      console.log("no solution");
    }
  }
}
