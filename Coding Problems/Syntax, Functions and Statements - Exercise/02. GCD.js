function getCommonDivisor(a, b) {
    if (b) {
        return getCommonDivisor(b, a % b);
    } else {
        return Math.abs(a);
    }
}

getCommonDivisor(10, 45);