module.exports = (_input) =>
    ((f) => f(f))(
        (f) => (input, pos, sum) =>
            (
                pos < input.length
                && f(f)(
                    input,
                    pos + 1,
                    sum +
                    (
                        ((fun) => fun(fun))(
                            (fun) => (sortedArray, i, j, div) =>
                                div ||
                                i < sortedArray.length - 1 && j < sortedArray.length
                                && sortedArray[j] % sortedArray[i] === 0 && fun(fun)(sortedArray, i, j, sortedArray[j] / sortedArray[i])
                                || j >= sortedArray.length && fun(fun)(sortedArray, i + 1, i + 2, div)
                                || i < sortedArray.length && fun(fun)(sortedArray, i, j + 1, div)
                                || 0
                        )
                    )(
                        input[pos]
                            .split(' ')
                            .map((num) => parseInt(num))
                            .sort((a, b) => a - b),
                        0,
                        1,
                        0
                    )
                )
            ) || sum
    )(_input, 0, 0);