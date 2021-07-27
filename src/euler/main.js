/**
 *  Euler problems' entry point.
 *
 *  @author Zimon Kuhs
 *  @date   2021-07-23
 */

import fs from "fs"
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
let solver = (await importFolder())[0][eulerName]

solver.call()

/**
 *  Recursively imports euler problems from the specified folder.
 *  (Includes anything called euler%d.js where %d is of course a number).
 *
 *  TODO: Modularize!
 *
 *  @param path The folder from which to recursively import euler problems.
 *              If not a folder, only imports that file, but elicits a warning.
 *  @return     A map to folders
 *  @see        https://nodejs.org/api/all.html#fs_fs_access_path_mode_callback
 */
async function importFolder(path = "./src/euler/") {
    let imports = []

    for (const item of fs.readdirSync(path)) {
        let file = item.toString()

        if (isEulerFile(file, ".js")) {
            // console.log("Importing " + "./" + file + ".")
            imports.push(await import("./" + file))
        }
    }

    return imports
}

/**
 *  Checks whether a file name is on the format "euler\\d+.[<possible extension>]".
 *
 * @param name          The file name.
 * @param extensions    One or more file extensions required.
 * @returns             True if the file name matches the specification.
 */
function isEulerFile(name, ...extensions) {
    let parts = name.split(/\d+/)

    if (parts.length !== 2) {
        return false
    }

    if (parts[0] !== "euler") {
        return false
    }

    if (extensions.length > 0 && !extensions.includes(parts[1])) {
        return false
    }

    return true
}

/**
 *  Terminates the program with usage message.
 */
function usageError() {
    console.error("Usage: node euler.js <problem number>")
    process.exit()
}
