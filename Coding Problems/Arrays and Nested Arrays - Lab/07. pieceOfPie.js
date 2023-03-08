function pieceOfPie(arr, start, stop) {

    const defineStart = arr.indexOf(start);
    const defineEnd = arr.indexOf(stop);
    const result = arr.slice(defineStart, defineEnd + 1);
    return result;
}

pieceOfPie(['Apple Crisp', 'Mississippi Mud Pie', 'Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie'], 'Pot Pie', 'Smoked Fish Pie');