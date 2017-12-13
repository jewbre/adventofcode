function knotHash(input) {

    const size = 256;
    const arr = (new Array(size)).join(' ').split(' ').map((v, i) => i);

    let skipSize = 0;
    let pos = 0;
    for (let span of input.split(',').map((v) => parseInt(v))) {
        for (let i = 0; i < Math.floor(span / 2); i++) {
            const tmp = arr[(pos + i) % size];
            arr[(pos + i) % size] = arr[(pos + span - 1 - i) % size];
            arr[(pos + span - 1 - i) % size] = tmp;
        }

        pos = (pos + span + skipSize++) % size;
    }

    return arr[0] * arr[1];
}

function fullKnotHash(input) {

    const size = 256;
    const arr = (new Array(size)).join(' ').split(' ').map((v, i) => i);

    let skipSize = 0;
    let pos = 0;
    const tmpInp = input.split('').map((v) => v.charCodeAt(0));
    const inp = [];
    for (let i = 0; i < 64; i++) {
        inp.push(...tmpInp);
        inp.push(...[17, 31, 73, 47, 23]);
    }


    console.log(inp);

    for (let span of inp) {
        for (let i = 0; i < Math.floor(span / 2); i++) {
            const tmp = arr[(pos + i) % size];
            arr[(pos + i) % size] = arr[(pos + span - 1 - i) % size];
            arr[(pos + span - 1 - i) % size] = tmp;
        }

        console.log(pos, skipSize, span);
        pos = (pos + span + skipSize++) % size;
    }
    console.log(pos, skipSize);

    const reduced = arr.reduce((red, val, index) => {
        const position = Math.floor(index / 16);
        if (red.length < position) {
            red.push(val);
            return red;
        }

        red[position] = red[position] ^ val;

        return red;
    }, []);

    const red2 = reduced
        .map((v) => v.toString(16))
        .join('');

    console.log(arr.join(' '), reduced, red2);

    return arr[0] * arr[1];
}

// console.log(knotHash('199,0,255,136,174,254,227,16,51,85,1,2,22,17,7,192'));
// console.log(knotHash('3, 4, 1, 5'));
console.log(fullKnotHash('199,0,255,136,174,254,227,16,51,85,1,2,22,17,7,192'));

const a = [16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 47, 46, 45, 44].reduce((red, val, index) => {
    const position = Math.floor(index / 16);
    if (red.length < position) {
        red.push(val);
        return red;
    }

    red[position] = red[position] ^ val;

    return red;
}, []);
console.log(a);

// correct answer = a9d0e68649d0174c8756a59ba21d4dc6