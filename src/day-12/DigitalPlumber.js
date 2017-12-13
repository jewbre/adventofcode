module.exports = (_input) => (
    (
        ((f) => f(f))(
            (f) => (input, pos, marker) =>
                marker[pos] === undefined
                && ((marker[pos] = true) || true)
                && input[pos]
                    .split(' <-> ')[1]
                    .split(', ')
                    .map(Number)
                    .every((n) => f(f)(input, n, marker))
                && false
                || marker
        )

    )(
        _input.split('\n'),
        0,
        new Array(_input.split('\n').length)
    ).reduce((red, val) => red + 1, 0)
);

// Second part of the task
function digitalPlumberCounter(input) {

    let marker = new Array(input.length);
    let markFunc = (pos, m) => {
        if (marker[pos] !== undefined) {
            return;
        }

        marker[pos] = m;
        for (let p of input[pos].split(' <-> ')[1].split(', ').map((i) => parseInt(i))) {
            markFunc(p, m);
        }
    };

    input.map((val, index) => markFunc(index, index + 1));

    console.log(marker);

    return marker
        .reduce((red, val) => (red[val] = true) && false || red, new Array(marker.length + 1))
        .reduce((red, val) => red + 1, 0);
}