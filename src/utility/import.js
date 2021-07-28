/*
 *  Import-related utility functions.
 *
 *  @author:    Zimon Kuhs
 *  @date:      2021-07-27
 */

import fs from "fs"
import path from "path"
import util from "util"

/*
 *  Specifies which file extensions should be considered for importing at all.
 */
const extensions = ["js"]

/**
 *  Recursively imports euler problems from the specified folder.
 *  (Includes anything called euler%d.js where %d is of course a number).
 *
 *  TODO: Modularize!
 *
 *  @param directory    The folder from which to recursively import files.
 *  @param filter       Inclusive filter on the file names.
 *  @return             A map to folders
 */
export async function importFolder(directory = ".", filter = (x) => x) {
    let imports = {}

    if (fs.statSync(directory).isFile()) {
        throw new Error(util.format("%s is not a directory!"))
    }

    for (const item of fs.readdirSync(directory)) {
        let file = item.toString()

        let moduleName = getModuleName(file)
        if (!filter(file) || moduleName === undefined) {
            continue
        }

        let fullPath = "file:///" + path.resolve(path.join(directory, file))
        let functions = await import(fullPath)

        let entry = (imports[moduleName] = {})
        for (const key of Object.keys(functions)) {
            let method = functions[key]
            entry[method.name] = method
        }
    }

    return imports
}

/**
 *  Retrieves the module name for a specified file, if it has an applicable file extension.
 *
 * @param   file    The file which module name to get.
 * @returns         The name if possible, otherwise undefined.
 */
function getModuleName(file) {
    for (let ext of extensions) {
        if (file.endsWith(ext)) {
            return file.split(new RegExp("." + ext))[0]
        }
    }
    return undefined
}
