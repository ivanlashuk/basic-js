const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    let nam = Number(sampleActivity);
    if (typeof sampleActivity != 'string') {
        return false;
    } else if (Number(sampleActivity) <= 0 || Number(sampleActivity) > 15) {
        return false;
    } else if (isNaN(nam) || nam == 0) {
        return false;
    } else {
        const k = (0.693 / HALF_LIFE_PERIOD);
        let time = Math.log(MODERN_ACTIVITY / sampleActivity) / k;
        return Math.ceil(time);
    }
};