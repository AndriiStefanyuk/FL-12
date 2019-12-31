function isLeapYear(input) {
  let year = new Date(input).getFullYear();
  if (!isNaN(year)) {
    if ((year % 100 !== 0 && year % 4 === 0) || year % 400 === 0) {
      return year + ' is a leap year';
    } else {
      return year + ' is not a leap year';
    }
  } else {
    return 'Invalid Date';
  }
}
isLeapYear('2020-01-01 00:00:00974');
isLeapYear(7883903045);
isLeapYear('2020-01-01 00:00:00');
