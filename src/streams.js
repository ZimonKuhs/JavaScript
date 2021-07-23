/**
 *  Stream sandboxing.
 *
 *  @author Zimon Kuhs
 *  @date   2021-07-22
 */

import fs from "fs"
let data = ""

let readerStream = fs.createReadStream("input.txt")

readerStream.setEncoding("UTF8")

readerStream.on("data", function (chunk) {
    data += chunk
})

readerStream.on("end", function () {
    console.log(data)
})

readerStream.on("error", function (err) {
    console.log(err.stack)
})

console.log("Program Ended")
