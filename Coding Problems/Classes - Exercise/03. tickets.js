function sortTickets(tickets, sortCriteria) {

    const result = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }


    tickets.forEach(ticket => {
        let [destination, price, status] = ticket.split('|');
        price = Number(price)
        const createTicket = new Ticket(destination, price, status);
        result.push(createTicket);
    });

    if (sortCriteria === 'destination') {
        result.sort((a, b) => a.destination.localeCompare(b.destination));

    } else if (sortCriteria === 'price') {
        result.sort((a, b) => a.price - b.price);
    } else {
        result.sort((a, b) => a.status.localeCompare(b.status));
    }
    return result;
}

sortTickets(['Philadelphia|94.20|available',

    'New York City|95.99|available',

    'New York City|95.99|sold',

    'Boston|126.20|departed'],

    'destination')