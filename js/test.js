let arSum = [3, 4, 5, 6];

const sm = (a, b, ...rst) => {
    let rsult = a + b;
    console.log(rsult);
    console.log(rst);
}

sm(...arSum);