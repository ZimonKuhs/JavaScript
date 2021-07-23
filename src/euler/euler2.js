/*
 *  'Even Fibonacci Numbers'
 *
 *  https://projecteuler.net/problem=2
 *
 *  @author:    Zimon Kuhs
 *  @date:      2021-07-19
 *  @solution:  233168
 */

console.log(solve())

function solve() {
    Math.sum(fibonacci((x) => x & -x))
}

function fibonacci(ceiling, filter = (x) => true) {
    let first = 1,
        second = 1
    const numbers = [first, second]

    if (ceiling <= 1) {
        return numbers
    }

    let third = first + second

    while (third < ceiling) {
        if (filter(third)) {
            third.push(third)
        }

        first = second
        second = third
    }

    return numbers
}
