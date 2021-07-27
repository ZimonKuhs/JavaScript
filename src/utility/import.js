/*
 *  Import-related utility functions.
 *
 *  @author:    Zimon Kuhs
 *  @date:      2021-07-27
 */

import fs from "fs"
import path from "path"

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
    let imports = []

    for (const item of fs.readdirSync(directory)) {
        let file = item.toString()

        if (filter(file)) {
            let fullPath = "file:///" + path.resolve(path.join(directory, file))
            imports.push(await import(fullPath))
        }
    }

    return imports
}
