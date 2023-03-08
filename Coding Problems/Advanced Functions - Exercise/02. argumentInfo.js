function argInfo() {

    let data = {};

    Array.from(arguments).forEach((arg => {
        console.log(`${typeof arg}: ${arg}`);

        if (!data[typeof arg]) {
            data[typeof arg] = 0;
        }
        data[typeof arg]++;

    }));

    Object.keys(data).sort((a, b) => data[b] - data[a])
        .forEach(key => console.log(`${key} = ${data[key]}`));
}

argInfo('cat', 'string', 42, 42, 42, function () { console.log('Hello world!'); });