/*
 *  'Even Fibonacci Numbers'
 *
 *  https://projecteuler.net/problem=2
 *
 *  @author:    Zimon Kuhs
 *  @date:      2021-07-19
 *  @solution:  233168
 */

export { solve as euler2 }

/**
 * Solves the problem of finding the sum of all even fibonacci numbers
 * lower than 4e6.
 *
 * @returns The solution to the specified problem.
 */
function solve() {
    return Math.sum(fibonacci(4e6, (x) => x & -x))
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
            numbers.push(third)
        }

        first = second
        second = third
    }

    return numbers
}
