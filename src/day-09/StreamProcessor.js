module.exports = (_input) => (
    (
        ((f) => f(f))(
            (f) => (input, pos, sum, inGarbage, canceled, openedGroups) =>
                pos < input.length && (
                    inGarbage && input[pos] === '!' && f(f)(input, pos + 2, sum, inGarbage, canceled, openedGroups)
                    || inGarbage && input[pos] === '>' && f(f)(input, pos + 1, sum, false, canceled, openedGroups)
                    || inGarbage && f(f)(input, pos + 1, sum, inGarbage, canceled + 1, openedGroups)
                    || !inGarbage && input[pos] === '<' && f(f)(input, pos + 1, sum, true, canceled, openedGroups)
                    || !inGarbage && input[pos] === '{' && f(f)(input, pos + 1, sum, inGarbage, canceled, openedGroups + 1)
                    || !inGarbage && input[pos] === '}' && f(f)(input, pos + 1, sum + openedGroups, inGarbage, canceled, openedGroups - 1)
                    || f(f)(input, pos + 1, sum, inGarbage, canceled, openedGroups)
                )
                || canceled
        )

    )(_input, 0, 0, false, 0, 0)
);