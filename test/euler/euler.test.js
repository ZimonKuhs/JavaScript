/**
 *  Tests that all euler problems still return their correct solutions.
 *
 *  TODO:   Add test(s) for euler module main.
 *
 *  @author Zimon Kuhs
 *  @date   2021-07-28
 *  @see    /src/euler/
 */

import assert from "assert"
import euler2 from "../../src/euler/euler2.js"
import euler3 from "../../src/euler/euler3.js"

const assertEqual = assert.strictEqual

describe("Euler problems.", () => {
    it("#2.", () => {
        assertEqual(4613732, euler2())
    })
    it("#3.", () => {
        assertEqual(6857, euler3())
    })
})
