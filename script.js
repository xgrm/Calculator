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
const acts = { p: plus, m: minus, d: divid, mult: multi };
const data = { act: null, number: null };

function input(props) {
  const output = document.getElementById("screen_output");
  let current_value = output.value;

  if (props === "DEL") {
    data.number = output.value = current_value.slice(
      0,
      current_value.length - 1
    );
  } else if (props === "=") {
    data.number = output.value = data.act(parseFloat(data.number)).toString(10);
  } else if (acts[props] === undefined) {
    data.number = output.value = current_value + props;
  } else {
    output.value = " ";
    data.act = acts[props](parseFloat(data.number));
  }
}

const input_keyborad = document.getElementById("screen_output");
input_keyborad.addEventListener("beforeinput", updateValue);
function updateValue(e) {
  input("");
}
