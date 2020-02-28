/* eslint-disable no-restricted-syntax */

function fibonacci() {
    let [prev, curr] = [0, 1];

    while (true) {
        [prev, curr] = [curr, prev + curr];
        yield curr;
    }
}

for (const n of fibonacci()) {
    console.log(n);
    if (n >= 500) {
        break;
    }
}

// expected output:
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34
// 55
// 89
// 144
// 233
// 377
// 610
// 987
// 1597
