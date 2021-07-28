/**
 *  Tests that all euler problems still return their correct solutions.
 *
 *  @author Zimon Kuhs
 *  @date   2021-07-28
 *  @see    /src/euler/
 */

import assert from "assert"
import euler2 from "../../src/euler/euler2.js"

const assertEqual = assert.strictEqual

describe("Euler problems.", () => {
    it("#2.", () => {
        assertEqual(4613732, euler2())
    })
})
