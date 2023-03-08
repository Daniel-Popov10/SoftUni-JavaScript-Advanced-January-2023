function createPerson(firstName, lastName) {


    const result = {
        firstName,
        lastName,
    };

    Object.defineProperty(result, 'fullName', {
        // enumerable: true,
        // configurable: true,
        get() {
            return `${this.firstName} ${this.lastName}`
        },

        set(value) {
            let [firstName, lastName] = value.split(' ');
            this.firstName = firstName;
            this.lastName = lastName;
        }
    });

    return result;
}

let person = createPerson("Peter", "Ivanov");




console.log(person.firstName); //Peter Ivanov

person.firstName = "George";

console.log(person.firstName); //George Ivanov

person.lastName = "Peterson";

console.log(person.fullName); //George Peterson

person.fullName = "Nikola Tesla";

console.log(person.firstName); //Nikola

console.log(person.lastName); //Tesla