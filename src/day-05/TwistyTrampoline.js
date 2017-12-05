module.exports = (input) => (
    ((f) => f(f))(
        (f) => (pos, steps) =>
            pos < input.length && f(f)(pos + input[pos], steps + 1, ++input[pos])
            || steps
    )
)(0, 0);