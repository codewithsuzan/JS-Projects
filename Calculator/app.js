const display = document.querySelector("#display");
appendToDisplay = (input) => {
  display.value += input;
};

clearDisplay = () => {
  display.value = "";
};

calculate = () => {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value="Error"
    }
};
