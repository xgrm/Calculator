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
    output.value = "";
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
  console.log(e.target.value);
  input("");
}

const calc_keyborad = document.getElementsByClassName("key");
for (var i = 0; i < calc_keyborad.length; i++) {
  calc_keyborad[i].addEventListener("click", updateKeyborad, false);
}
function updateKeyborad(e) {
  input(e.target.innerText);
}

const toggle = document.getElementsByClassName("tw-toggle");
for (var i = 0; i < toggle.length; i++) {
  toggle[i].addEventListener("click", changeColor, false);
}

function changeColor(e) {
  switch (e.target.value) {
    case "1":
      document.documentElement.style.setProperty(
        "--background-color",
        "hsl(222, 26%, 31%)"
      );
      document.documentElement.style.setProperty(
        "--keypad-background",
        "hsl(223, 31%, 20%)"
      );
      document.documentElement.style.setProperty(
        "--screen-background",
        "hsl(224, 36%, 15%)"
      );
      document.documentElement.style.setProperty(
        "--del-key-background",
        "hsl(225, 21%, 49%)"
      );
      document.documentElement.style.setProperty(
        "--del-key-shadow",
        "hsl(224, 28%, 35%)"
      );
      document.documentElement.style.setProperty(
        "--equal-key-background",
        "hsl(6, 63%, 50%)"
      );
      document.documentElement.style.setProperty(
        "--equal-key-shadow",
        "hsl(6, 70%, 34%)"
      );
      document.documentElement.style.setProperty(
        "--key-background",
        "hsl(30, 25%, 89%)"
      );
      document.documentElement.style.setProperty(
        "--main-key-shadow",
        "hsl(28, 16%, 65%)"
      );
      document.documentElement.style.setProperty(
        "--key-font-color",
        "hsl(221, 14%, 31%)"
      );
      document.documentElement.style.setProperty("--main-font-color", "white");
      document.documentElement.style.setProperty(
        "--reset-key-font-color",
        "white"
      );
      document.documentElement.style.setProperty(
        "--equal-key-font-color",
        "white"
      );
      break;
    case "2":
      document.documentElement.style.setProperty(
        "--background-color",
        "hsl(0, 0%, 90%)"
      );
      document.documentElement.style.setProperty(
        "--keypad-background",
        "hsl(0, 5%, 81%)"
      );
      document.documentElement.style.setProperty(
        "--screen-background",
        "hsl(0, 0%, 93%)"
      );
      document.documentElement.style.setProperty(
        "--del-key-background",
        "hsl(185, 42%, 37%)"
      );
      document.documentElement.style.setProperty(
        "--del-key-shadow",
        "hsl(185, 58%, 25%)"
      );
      document.documentElement.style.setProperty(
        "--equal-key-background",
        "hsl(25, 98%, 40%)"
      );
      document.documentElement.style.setProperty(
        "--equal-key-shadow",
        "hsl(25, 99%, 27%)"
      );
      document.documentElement.style.setProperty(
        "--key-background",
        "hsl(45, 7%, 89%)"
      );
      document.documentElement.style.setProperty(
        "--main-key-shadow",
        "hsl(35, 11%, 61%)"
      );
      document.documentElement.style.setProperty(
        "--key-font-color",
        "hsl(221, 14%, 31%)"
      );
      document.documentElement.style.setProperty(
        "--main-font-color",
        "hsl(60, 10%, 19%)"
      );
      document.documentElement.style.setProperty(
        "--reset-key-font-color",
        "white"
      );
      document.documentElement.style.setProperty(
        "--equal-key-font-color",
        "white"
      );
      break;
    case "3":
      document.documentElement.style.setProperty(
        "--background-color",
        "hsl(268, 75%, 9%)"
      );
      document.documentElement.style.setProperty(
        "--keypad-background",
        "hsl(268, 71%, 12%)"
      );
      document.documentElement.style.setProperty(
        "--screen-background",
        "hsl(268, 71%, 12%)"
      );
      document.documentElement.style.setProperty(
        "--del-key-background",
        "hsl(281, 89%, 26%)"
      );
      document.documentElement.style.setProperty(
        "--del-key-shadow",
        "hsl(285, 91%, 52%)"
      );
      document.documentElement.style.setProperty(
        "--equal-key-background",
        "hsl(176, 100%, 44%)"
      );
      document.documentElement.style.setProperty(
        "--equal-key-shadow",
        "hsl(177, 92%, 70%)"
      );
      document.documentElement.style.setProperty(
        "--key-background",
        "hsl(268, 47%, 21%)"
      );
      document.documentElement.style.setProperty(
        "--main-key-shadow",
        "hsl(290, 70%, 36%)"
      );
      document.documentElement.style.setProperty(
        "--key-font-color",
        "hsl(52, 100%, 62%)"
      );
      document.documentElement.style.setProperty(
        "--main-font-color",
        "hsl(52, 100%, 62%)"
      );
      document.documentElement.style.setProperty(
        "--reset-key-font-color",
        "white"
      );
      document.documentElement.style.setProperty(
        "--equal-key-font-color",
        "hsl(198, 20%, 13%)"
      );
      break;

    default:
      break;
  }
}
