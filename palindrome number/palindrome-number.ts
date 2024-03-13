function isPalindrome(x: number): boolean {
    let numbers = x.toString().split('')
    let number = numbers.reverse().values()
    let aux = ''
    for(let alg of number){
        aux += alg
    }
    
    return aux === x.toString() ? true : false
};