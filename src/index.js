module.exports = function reverse (n) {
    if (n < 0) {
        n = -n;
    }
  let str = String(n);
  result = '';
  for (let i = (str.length - 1); i >= 0; i--) {
      result += str[i];
  }
  return Number(result);
}
