function processList(list) {
    let collection = [];

    list.forEach(el => {
        let [command, value] = el.split(' ');
        function processCommand() {
            switch (command) {
                case 'add':
                    collection.push(value);
                    break;
                case 'remove':
                    collection = collection.filter(el => el !== value)
                    break;
                case 'print':
                    console.log(collection.join(','));
                    break;

            }
            return collection;
        }
        processCommand();
    });

}

processList(['add pesho', 'add george', 'add peter', 'add peter', 'add peter', 'add peter', 'remove peter', 'print', 'add pesho', 'print']);