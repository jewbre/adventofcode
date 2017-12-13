const fun = (_input, _delay) =>
    ((input, delay) =>
        input
            .filter(([d, v]) => (d + delay) % ((v - 1) * 2 ) === 0)
            .reduce((red, [d, v]) => (red * (+(red > -1))) + d * v, -1))(
        _input
            .split('\n')
            .map((i) => i.split(': ').map(Number)),
        _delay
    )
;

module.exports = fun;