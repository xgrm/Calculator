const calcScreen = document.getElementById("screen_output");
const body = document.getElementsByTagName("body")[0];
calcScreen.readOnly = true;
var plus = (x) => {
  var z = x;
  return {
    get: function (y) {
      return z + y;
    },
    set: function (value) {
      z = value;
    },
  };
};
var minus = (x) => {
  var z = x;
  return {
    get: function (y) {
      return z - y;
    },
    set: function (value) {
      z = value;
    },
  };
};
var divid = (x) => {
  var z = x;
  return {
    get: function (y) {
      if (y !== 0) {
        return x / y;
      }
      return NaN;
    },
    set: function (value) {
      z = value;
    },
  };
};
var multi = (x) => {
  var z = x;
  return {
    get: function (y) {
      return z * y;
    },
    set: function (value) {
      z = value;
    },
  };
};
const valid = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  ".",
  "/",
  "=",
  "+",
  "-",
  "x",
  "Backspace",
  "Delete",
];
const arithmeticMap = { "+": plus, "-": minus, "/": divid, x: multi };
const arithmetic = {
  action: null,
  currentNumber: 0,
  previousNumber: 0,
  newAction: true,
};
function deleteOneDigit(num) {
  const str = num.toString();
  return parseFloat(str.slice(0, str.length - 1));
}

function Calculate(props) {
  if (props === "Shift") return;
  arithmetic.currentNumber = Number(calcScreen.value);

  if (props === "DEL" || props === "Backspace" || props === "Delete") {
    arithmetic.currentNumber = deleteOneDigit(arithmetic.currentNumber);
    showOnCalcScreen(arithmetic.currentNumber);
  } else if (props === "=" && arithmetic.action != null) {
    if (!arithmetic.newAction) {
      arithmetic.action.set(arithmetic.currentNumber);
      arithmetic.currentNumber = arithmetic.previousNumber;
    }
    arithmetic.currentNumber = arithmetic.action.get(arithmetic.currentNumber);
    showOnCalcScreen(arithmetic.currentNumber);
    arithmetic.newAction = false;
  } else if (props === "RESET") {
    arithmetic.currentNumber = 0;
    arithmetic.previousNumber = 0;
    arithmetic.action = null;
    arithmetic.newAction = true;
    showOnCalcScreen("");
  } else if (arithmeticMap[props] !== undefined) {
    arithmetic.action = arithmeticMap[props](arithmetic.currentNumber);
    showOnCalcScreen("");
    arithmetic.newAction = true;
  } else if (arithmetic.newAction === false) {
    Calculate("RESET");
    Calculate(props);
  } else if (props == 0 || props === "." || parseFloat(props)) {
    showOnCalcScreen(calcScreen.value + props);
    arithmetic.previousNumber = Number(calcScreen.value);
  }
}

function showOnCalcScreen(props) {
  calcScreen.value = props;
}

const calc_keyborad = document.getElementsByClassName("key");
for (var i = 0; i < calc_keyborad.length; i++) {
  calc_keyborad[i].addEventListener(
    "click",
    (e) => Calculate(e.target.innerText),
    false
  );
}

calcScreen.addEventListener("input", () => Calculate(""));
body.addEventListener("keydown", (e) => Calculate(e.key));
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
