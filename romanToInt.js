/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const converterMap = {
        'M': 1000,
        "D": 500,
        "C": 100,
        "L": 50,
        "X": 10,
        "V": 5,
        "I": 1,
    };
    const converted = s.split("").map((rn) => converterMap[rn]);

    let result = 0;
    for (let i = 0; i < converted.length; i++) {
        const cur = converted[i];
        const next = converted[i+1];

        if (cur < next){
            result += next - cur;
            i++;
        } else {
            result += cur;
        }
    }

    return result; 
};
