function calcStringLength(str1, str2, str3) {

    const total = str1 + str2 + str3;
    const avg = (Math.floor(total.length / 3));
    console.log(total.length);
    console.log(avg);
}

calcStringLength('apple', 'orange', 'dog');