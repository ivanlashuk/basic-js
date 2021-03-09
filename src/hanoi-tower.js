const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const turn = (2 ** disksNumber) - 1;
    const sec = (turnsSpeed / 60) / 60;
    const second = Math.floor(turn / sec);
    let value = {};
    value['turns'] = turn;
    value['seconds'] = second;
    return value;
};