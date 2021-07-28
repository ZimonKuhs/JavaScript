/**
 *  Event sandboxing.
 *
 *  @author Zimon Kuhs
 *  @date   2021-07-22
 */

import events from "events"

const eventEmitter = new events.EventEmitter()

const listener1 = function listener1() {
    console.log("ONEONE")
}
const listener2 = function listener2() {
    console.log("Dos amigos")
}

eventEmitter.addListener("connection", listener1)
eventEmitter.on("connection", listener2)

eventEmitter.emit("connection")

eventEmitter.removeListener("connection", listener1)

eventEmitter.emit("connection")

console.log("FIN.")

function listenerMessage(number) {
    console.log("We have " + number + " listeners doing their stuff.")
}
