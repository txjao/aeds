function romanToInt(s: string): number {
    let number = 0
    let numerals = s.split('')
    let lastNumeral = ''

    for (let i = 0; i < numerals.length; i++) {

        if (numerals[i] === "I") {
            number++
        } else if (numerals[i] === "V") {
            number += 5
        } else if (numerals[i] === "X") {
            number += 10
        } else if (numerals[i] === "L") {
            number += 50
        } else if (numerals[i] === "C") {
            number += 100
        } else if (numerals[i] === "D") {
            number += 500
        } else if (numerals[i] === "M") {
            number += 1000
        }

        //compare if's most remove the last numeral, if true removes last value with the diferencce number*2
        if (numerals[i] === "V" && lastNumeral === 'I') {
            number -= 2
        } else if (numerals[i] === "X" && lastNumeral === 'I') {
            number -= 2
        } else if (numerals[i] === "L" && lastNumeral === 'X') {
            number -= 20
        } else if (numerals[i] === "C" && lastNumeral === 'X') {
            number -= 20
        } else if (numerals[i] === "D" && lastNumeral === 'C') {
            number -= 200
        } else if (numerals[i] === "M" && lastNumeral === 'C') {
            number -= 200
        }

        lastNumeral = numerals[i]
    }

    return number
};