/**
 *  Euler problems' entry point.
 *
 *  @author Zimon Kuhs
 *  @date   2021-07-23
 */

import util from "util"
import importModules from "import-modules"

importModules(".")

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

console.log(eval(util.format("euler%d()", number)))

/**
 *  Terminates the program with usage message.
 */
function usageError() {
    console.error("Usage: node euler.js <problem number>")
    process.exit()
}
