const prompt = require("prompt-sync")();


let choice = Number(prompt("Enter your choice (1 or 2): "));
// choice 1 for degre celcius to farenheight
// choice 2 for farenheigh to degre celcius
switch (choice) {
    case 1:
        let degC = Number(prompt("Temperature in celcius "));
        if (degC >= 0 && degC <= 100) {
            let degF = (degC * 9 / 5) + 32;
            console.log(`${degC} in farenheight is ${degF}`);
        } else {
            console.log("Enter a valid celcius value");
        }
        break;

    case 2:
        let degF = Number(prompt("Temperature in Fahrenheight: "));
        if (degF >= 32 && degF <= 212) {
            let degCelsius = (degF - 32) * 5 / 9;
            console.log(`${degF} in Celcius is ${degC}`);
        } else {
            console.log("Enter a valid farenheit value");
        }
        break;

    default:
        console.log("Please choode a valid choice ");
}
