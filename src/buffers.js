/**
 *  Buffer sandboxing.
 *
 *  N.B. Opting to use new buffer logic as old behavior was deprecated in Node.js 10.
 *
 *  @author Zimon Kuhs
 *  @date   2021-07-22
 *  @see    https://nodesource.com/blog/understanding-the-buffer-deprecation-in-node-js-10/
 */

let buffer = Buffer.from(new ArrayBuffer(256))
let buffer2 = Buffer.from(new ArrayBuffer(256))

buffer.write("I am not sure why we're doing this yet.\n")
buffer2.write("Not now either, really.\n")
buffer2.copy(buffer)

console.log(buffer.slice(0, 3).toString())
console.log(buffer2.toString())
console.log(buffer.length)

function newBuffer(octets) {
    return Buffer.from(new ArrayBuffer(octets))
}
