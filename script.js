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

const acts = { "+": plus, "-": minus, "/": divid, x: multi };
const data = { act: null, number: null };
var counter = 0;
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
    counter = 0;
  } else if (props === "RESET") {
    output.value = " ";
    data.act = null;
    data.number = null;
  } else if (acts[props] === undefined) {
    data.number = output.value = current_value + props;
  } else {
    if (counter === 1) {
      data.number = data.act(parseFloat(data.number)).toString(10);
      counter = 0;
    }
    output.value = " ";
    data.act = acts[props](parseFloat(data.number));
    counter++;
  }
}

const input_keyborad = document.getElementById("screen_output");
input_keyborad.value;
input_keyborad.addEventListener("input", updateValue);
function updateValue(e) {
  input_keyborad.innerText;
  input("");
}

const calc_keyborad = document.getElementsByClassName("key");
for (var i = 0; i < calc_keyborad.length; i++) {
  calc_keyborad[i].addEventListener("click", updateKeyborad, false);
}
function updateKeyborad(e) {
  console.log(e.target.innerText);
}
