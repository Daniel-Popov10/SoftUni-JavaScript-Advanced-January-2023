function printCard(face, suit) {

    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'].find(el => el === face);


    let suits = {
        S: '\u2660',
        H: '\u2660',
        D: '\u2666',
        C: '\u2663',
        toString() {
            return `${faces}${suits[suit]}`
        }
    }

    if (!faces || !suits[suit]) {
        throw new Error('Error');
    }
    return suits;
}


let card = printCard('A', 'S');
card.toString()