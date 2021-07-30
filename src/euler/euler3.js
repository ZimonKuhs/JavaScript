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
    return Math.max(sieve(Math.sqrt(600851475143)))
}

function sieve(number) {
    if (number <= 1) {
        return []
    }

    const sieve = utility.filledArray(true, number)

    for (let i = 2; i < Math.sqrt(number); ++i) {
        if (!sieve[i]) {
            continue
        }

        for (let j = i * i; j < number; j += i) {
            sieve[j] = false
        }
    }

    return sieve.map.reduce((highest, current) => (current > highest ? current : highest))
}
