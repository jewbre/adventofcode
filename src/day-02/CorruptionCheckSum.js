module.exports = (_input) =>
    ((f) => f(f))(
        (f) => (input, pos, sum) =>
            (
                pos < input.length
                && f(f)(
                    input,
                    pos + 1,
                    sum +
                    ((sortedArray) => sortedArray[sortedArray.length - 1] - sortedArray[0])(
                        input[pos]
                            .split(' ')
                            .map((num) => parseInt(num))
                            .sort((a, b) => a - b)
                    )
                )
            ) || sum
    )(_input, 0, 0);