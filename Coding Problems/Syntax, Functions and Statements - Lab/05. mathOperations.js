function operation(a, b, operator) {
    let result = 0;

    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
        case '%':
            result = a % b;
            break;
        case '**':
            result = a ** b;
            break;
    }

    console.log(result);
}

operation(5, 6, '+')

