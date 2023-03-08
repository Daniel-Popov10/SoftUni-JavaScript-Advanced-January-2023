function sameNums(a) {

    let iterableNum = a.toString().split('');
    let isSameNum = iterableNum.filter((n) => n !== iterableNum[0]).length ? false : true;
    let sum = iterableNum.map(Number).reduce((acc, num) => acc + num);
    console.log(isSameNum);
    console.log(sum);


}

sameNums(2222);