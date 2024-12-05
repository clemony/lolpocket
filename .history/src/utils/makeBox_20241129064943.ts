
export function makeBox(length) {
    if (length < 6) {
        return 6 - length as number
    }
}