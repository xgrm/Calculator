const plus = (x) => {
  return function (y) {
    let z = x;
    x = y;
    return z + y;
  };
};
const minus = (x) => {
  return function (y) {
    let z = x;
    x = y;
    return z - y;
  };
};
const divid = (x) => {
  return function (y) {
    if (y !== 0) {
      let z = x;
      x = y;
      return z / y;
    }
    return NaN;
  };
};
const multi = (x) => {
  return function (y) {
    let z = x;
    x = y;
    return z * y;
  };
};
