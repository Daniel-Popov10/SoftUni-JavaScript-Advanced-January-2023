function getPreviousDay(year, month, day) {

    let date = new Date(year, month - 1, day - 1);
    let getYear = date.getUTCFullYear();
    let getMonth = date.getUTCMonth() + 1;
    let getPrevDay = date.getUTCDate();
    console.log(`${getYear}-${getMonth}-${getPrevDay}`);
}

getPreviousDay(2016, 1, 31);