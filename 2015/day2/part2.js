module.exports = input => input.map(i => i.split`x`.map(i => +i).sort((a, b) => a - b))
    .map(d => 2 * (d[0] + d[1]) + d[0] * d[1] * d[2]).reduce((r, v) => r + v, 0)
