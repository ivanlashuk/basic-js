module.exports = function getSeason(date) {
    if (date == null) {
        return 'Unable to determine the time of year!'
    }

    if (Object.prototype.toString.call(date) != '[object Date]') {
        throw new Error('THROWN');
    }

    const number = date.getMonth();
    console.log(number);

    if (number === 11 || number === 0 || number === 1) {
        return ('winter');
    } else if (number === 2 || number === 3 || number === 4) {
        return ('spring');
    } else if (number === 5 || number === 6 || number === 7) {
        return ('summer');
    } else if (number === 8 || number === 9 || number === 10) {
        return ('autumn');
    }

}