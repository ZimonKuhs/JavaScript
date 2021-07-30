/*
 *  Import-related utility functions.
 *
 *  @author:    Zimon Kuhs
 *  @date:      2021-07-27
 */

/**
 *  Creates an array pre-filled with an object.
 *
 *  @param object   The object to fill the array with.
 *  @param size     The size of the array.
 */
export function filledArray(object, size) {
    if (size <= 0) {
        throw new ValueError("An array has to have a non-zero, positive size!")
    }

    let converter = undefined
    switch (typeof object) {
        case "object":
            converter = Object.assign

        default:
            converter = x => x
    }

    const array = []
    for (let i = 0; i < size; ++i) {
        array[i] = converter(object)
    }

    return array
}
