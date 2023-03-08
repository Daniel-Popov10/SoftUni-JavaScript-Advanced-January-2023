function rotateArray(arr, rotations) {

    for (let i = 0; i < rotations; i++) {

        let remove = arr.pop();
        arr.unshift(remove);
    }

    console.log(arr.join(' '));
}

rotateArray(['1', '2', '3', '4'], 2);