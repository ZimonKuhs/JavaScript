/*
 *  'Largest Prime Factor'
 *
 *  https://projecteuler.net/problem=3
 *
 *  @author:    Zimon Kuhs
 *  @date:      2021-07-28
 *  @solution:  6857
 */

import utility from "../utility/index.js"

/**
 *  Solves the problem of finding the largest prime factor of 600851475143.
 *
 *  @returns The solution to the specified problem.
 */
export default function solve() {
    return Math.max(sieve(600851475143))
}

function sieve(number) {
    if (number < 4) {
        return []
    }
    const size = Math.ceil(Math.sqrt(number))
    const sieve = utility.filledArray(true, size)

    for (let i = 2; i * i <= size; ++i) {
        if (!sieve[i]) {
            continue
        }

        for (let j = i * i; j <= size; j += i) {
            sieve[j] = false
        }
    }

    return sieve.reduce((highest, isPrime, index) => {
        if (index === 6857) {
        }
        return isPrime && number % index == 0 && index > highest ? index : highest
    }, 0)
}
