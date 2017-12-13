module.exports = (_input) =>
    ((input) => input
            .filter(
                (row, index) =>
                    row.reduce(
                        (red, item, itemIndex) => red && row.indexOf(item, itemIndex + 1) === -1
                        , true)
            ).length)(_input
        .split('\n')
        .map(
            (row) =>
                row.split(' ')
        ), 0);