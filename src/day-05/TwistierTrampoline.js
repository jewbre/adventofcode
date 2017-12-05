module.exports = (input) => (
    ((f) => f(f))(
        (f) => (pos, steps) =>
            pos < input.length && (
                input[pos] >= 3 && f(f)(pos + input[pos], steps + 1, --input[pos])
                || input[pos] < 3 && f(f)(pos + input[pos], steps + 1, ++input[pos])
            )
            || steps
    )
)(0, 0);