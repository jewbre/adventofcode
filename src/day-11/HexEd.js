module.exports = (_input) => (
    (
        ((f) => f(f))(
            (f) => (input, pos, x, y, z) =>
                pos < input.length && (
                    input[pos] === 'n' && f(f)(input, pos + 1, x, y + 1, z - 1)
                    || input[pos] === 'nw' && f(f)(input, pos + 1, x - 1, y + 1, z)
                    || input[pos] === 'sw' && f(f)(input, pos + 1, x - 1, y, z + 1)
                    || input[pos] === 's' && f(f)(input, pos + 1, x, y - 1, z + 1)
                    || input[pos] === 'se' && f(f)(input, pos + 1, x + 1, y - 1, z)
                    || input[pos] === 'ne' && f(f)(input, pos + 1, x + 1, y, z - 1)
                )
                || Math.max(Math.abs(x), Math.abs(y), Math.abs(z))
        )

    )(_input.split(','), 0, 0, 0, 0)
);