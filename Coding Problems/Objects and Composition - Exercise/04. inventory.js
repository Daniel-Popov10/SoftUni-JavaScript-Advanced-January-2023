function storeHeroes(data) {
    const result = {};
    const heroArr = [];

    for (const hero of data) {
        let [name, level, items] = hero.split(' / ');
        level = Number(level);

        items = items ? items.split(', ') : [];
        heroArr.push({ name, level, items });

    }
    console.log(JSON.stringify(heroArr));

}

storeHeroes(['Isacc / 25 / Apple, GravityGun',

    'Derek / 12 / BarrelVest, DestructionSword',

    'Hes / 1 / Desolator, Sentinel, Antara']);