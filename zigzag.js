/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const matrix = [];
    const picker = initializePicker(numRows);

    let counter = 0;
    for (let letter of s.split('')) {
        matrix[picker[counter]] = matrix[picker[counter]] ? matrix[picker[counter]] : [];
        matrix[picker[counter]].push(letter);
        if (counter === numRows + numRows - 3) {
            counter = 0;
        } else {
            counter++;
        }
    }

    return matrix.reduce((acc, row) => acc.concat(...row), []).join('');
};

function initializePicker(n) {
    const picker = Array.from({length: n}, (_, i) => i);
    for (let i = n - 2; i > 0; i--) {
        picker.push(i);
    }
    return picker;
}
