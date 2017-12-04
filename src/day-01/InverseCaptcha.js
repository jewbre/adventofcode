module.exports = (_input, _step) =>
    ((f) => f(f))(
        (f) => (input, step, pos, sum) =>
            (pos < input.length
                && f(f)(input, step, pos + 1, sum + +(input[pos] === input[(pos + step) % input.length]) * input[pos])
            )
            || sum
    )(_input, _step, 0, 0);