function printDeckOfCards(cards) {
    let result = [];
    let invalidCard = [];
    function createCard(card, suit) {
        let [face, suite] = card.split('  ');
        let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'].find(el => el === face);


        let suits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663',
            toString() {
                return `${faces}${suits[suit]}`;
            }
        }

        if (!faces || !suits[suit]) {
            invalidCard.push(`Invalid card: ${card}${suit}`);
        }
        return suits.toString();



    }

    cards.forEach(card => {

        if (card.length === 2) {
            let [face, suite] = card.split('');
            result.push(createCard(face, suite));
        } else {
            let face = card.slice(0, 2);
            let suite = card.slice(2);
            result.push(createCard(face, suite));
        }

    });

    if (invalidCard.length) {
        console.log(invalidCard.join(' '));
    } else {
        console.log(result.join(' '));
    }
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);

