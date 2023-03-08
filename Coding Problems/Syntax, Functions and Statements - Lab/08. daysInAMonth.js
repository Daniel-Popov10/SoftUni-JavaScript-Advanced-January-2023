function getDays(month, year) {
    const date = new Date(year, month, 0).getDate();

    console.log(date);
}

getDays(2, 2021);