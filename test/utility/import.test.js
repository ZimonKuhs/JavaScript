/**
 *  Tests the import.js utility functions.
 *
 *  @author Zimon Kuhs
 *  @date   2021-07-28
 *  @see    /src/utility/import.js
 */

import assert from "assert"
import { importFolder } from "../../src/utility/import.js"

const assertEqual = assert.strictEqual

describe("Import folder.", async () => {
    const functions = await importFolder("test/utility/mocks/import")

    it("Only valid imports are included.", () => {
        assert("importFile1" in functions)
        assert("importFile2" in functions)
    })

    it("Imports include their respective functions.", () => {
        const module1 = functions["importFile1"]
        const module2 = functions["importFile2"]

        assert("giveOne" in module1)
        assert("giveZ" in module1)
        assert("giveTwo" in module2)
        assert("giveA" in module2)
    })

    it("Imported objects are callable functions.", () => {
        assertEqual(1, functions["importFile1"]["giveOne"].call())
        assertEqual("Z", functions["importFile1"]["giveZ"].call())
        assertEqual(2, functions["importFile2"]["giveTwo"].call())
        assertEqual("A", functions["importFile2"]["giveA"].call())
    })

    //  TODO:   Should it, though?
    //          Also, figure out how to check error message unless needlessly verbose.
    it("Asking to import a non-folder should yield an error.", () => {
        assert.rejects(async () => await importFolder("test/utility/mocks/import/importFile1.js"))
    })

    it("Importing with invalid path should yield an error.", async () => {
        assert.rejects(async () => await importFolder(1))
    })
})
