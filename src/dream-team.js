module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) {
        return false;
    }
    const arr = [];
    for (const item of members) {
        if (typeof(item) === 'string') {
            if (item[0] === ' ') {
                let i = 1;
                while (item[i] === ' ') {
                    i++;
                }
                let j = item[i].toUpperCase();
                arr.push(j);
            }
            let j = item[0].toUpperCase();
            arr.push(j);
        }
    }
    if (arr.length === 0) {
        return false
    }

    let dream = arr.sort();
    let x = dream.join('');
    x = x.replace(/\s/g, '');
    return x
};