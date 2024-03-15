function lengthOfLastWord(s: string): number {
    let words = s.split(' ').filter(v => v != '')
    let length

    for (let i = words.length - 1; i != words.length; i++) {
        length = words[i].length
    }

    return length
};