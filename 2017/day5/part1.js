module.exports = input => {
    let index = 0, jumps = 0
    input = input.map(i => +i)

    do {
        let distance = input[index]
        input[index]++
        index += distance
        jumps++
    } while (index < input.length && index >= 0)
    return jumps
}
