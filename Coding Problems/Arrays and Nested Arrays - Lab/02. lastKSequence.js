function sequence(n, k) {

    let sequence = [1];



    for (let index = 1; index < n; index++) {

        let currentNum = Math.max(sequence.length - k, 0);
        let lastNum = sequence.slice(currentNum);

        let sum = 0;
        for (const num of lastNum) {
            sum += num;
        }
        sequence.push(sum);
    }
    return sequence;
}
sequence(6, 3);


