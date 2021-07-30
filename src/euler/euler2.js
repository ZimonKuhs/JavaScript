/*
 *  'Even Fibonacci Numbers'
 *
 *  https://projecteuler.net/problem=2
 *
 *  @author:    Zimon Kuhs
 *  @date:      2021-07-19
 *  @solution:  4613732
 */

/**
 *  Solves the problem of finding the sum of all even fibonacci numbers
 *  lower than 4e6.
 *
 *  @returns The solution to the specified problem.
 */
export default function solve() {
    return fibonacci(4e6, x => !(x & 1)).reduce((a, b) => a + b, 0)
}

/**
 *  Generates Fibonacci numbers.
 *
 *  TODO: Should probably be moved to a math utility module.
 *
 *  @param   ceiling The inclusive, maximum value.
 *  @param   filter  An inclusive filter for the numbers.
 *  @returns All fibonacci numbers fulfilling the specifications.
 */
function fibonacci(ceiling = 1e6, filter = x => true) {
    if (ceiling <= 0) {
        return []
    }

    let numbers = []
    let first = 0,
        second = 0,
        third = 1

    while (third < ceiling) {
        if (filter(third)) {
            numbers.push(third)
        }

        first = second
        second = third
        third = first + second
    }

    return numbers
}
