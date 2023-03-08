function createTownList(input) {

    const townList = {};

    for (const line of input) {

        const [townName, population] = line.split(' <-> ');



        if (!townList.hasOwnProperty(townName)) {
            townList[townName] = 0;
        }

        townList[townName] += Number(population);
    }

    console.log(Object
        .entries(townList)
        .map(([name, population]) => `${name} : ${population}`)
        .join('\n'));

}

createTownList(["Istanbul <-> 100000", "Honk Kong <-> 2100004", "Jerusalem <-> 2352344", "Mexico City <-> 23401925", "Istanbul <-> 1000"]);
