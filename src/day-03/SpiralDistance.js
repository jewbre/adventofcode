module.exports = (_n) =>
    Math.abs((
        ((f) => f(f))(
            (f) => (n) =>
                Math.round((n > 1 && f(f)(n - 1) || 0) + Math.sin((Math.floor(Math.sqrt(4 * (n - 2) + 1)) % 4) * Math.PI / 2))
        )
    )(_n)) +
    Math.abs((
        ((f) => f(f))(
            (f) => (n) =>
                Math.round((n > 1 && f(f)(n - 1) || 0) + Math.cos((Math.floor(Math.sqrt(4 * (n - 2) + 1)) % 4) * Math.PI / 2))
        )
    )(_n));