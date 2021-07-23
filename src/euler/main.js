/**
 *  Euler problems' entry point.
 *
 *  @author Zimon Kuhs
 *  @date   2021-07-23
 */

import importModules from "import-modules"

importModules(".")

args = process.argv
argc = length(args)

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

/**
 *  Terminates the program with usage message.
 */
function usageError() {
    console.error("Usage: node euler.js <problem number>")
    process.exit()
}
