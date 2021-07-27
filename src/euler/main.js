/**
 *  Euler problems' entry point.
 *
 *  @author Zimon Kuhs
 *  @date   2021-07-23
 */

import utility from "../utility/index.js"
import process from "process"
import util from "util"

const args = process.argv
const argc = args.length

if (argc <= 2) {
    usageError()
}

let number = parseInt(args[2])
if (isNaN(number)) {
    usageError()
}

if (argc > 3) {
    console.warn("Ignoring " + (argc - 3) + " superfluous arguments.")
}

let eulerName = util.format("euler%d", number)
let solver = (await utility.importFolder("./src/euler", isEulerFile))[0][
    eulerName
]

solver.call()

/**
 *  Checks whether a file name is on the format "euler\\d+.[<possible extension>]".
 *
 * @param name          The file name.
 * @returns             True if the file name matches the specification.
 */
function isEulerFile(name) {
    let parts = name.split(/\d+/)

    return parts.length === 2 && parts[0] === "euler" && parts[1] === ".js"
}

/**
 *  Terminates the program with usage message.
 */
function usageError() {
    console.error("Usage: node euler.js <problem number>")
    process.exit()
}
