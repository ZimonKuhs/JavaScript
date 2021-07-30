/**
 *  Euler problems' entry point.
 *
 *
 *  @author Zimon Kuhs
 *  @date   2021-07-23
 */

import process from "process"
import util from "util"
import utility from "../utility/index.js"

const args = process.argv
const argc = args.length

if (argc <= 2) {
    usageError()
}

let number = parseInt(args[2])
if (isNaN(number)) {
    usageError()
}

//  TODO: Take multiple arguments to solve multiple problems one after another?
if (argc > 3) {
    console.warn("Ignoring " + (argc - 3) + " superfluous arguments.")
}

let eulerName = util.format("euler%d", number)
let problems = await utility.importFolder("./src/euler", isEulerFile)

console.log(problems[eulerName].solve.call())
console.log("Finished solving problems.")

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
