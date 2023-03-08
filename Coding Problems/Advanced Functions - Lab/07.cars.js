function createCars(commands) {

    let objects = {};

    commands.forEach(line => {
        let [command, object, secondCmd, prop] = line.split(' ');
        if (command === 'create') {
            if (secondCmd) {
                objects[object] = Object.create(objects[prop])
            } else {
                objects[object] = {};
            }
        } else if (command === 'set') {
            objects[object][secondCmd] = prop;

        } else if (command === 'print') {
            let output = []
            for (const key in objects[object]) {
                output.push(`${key}:${objects[object][key]}`);
            }
            console.log(output.join(','));
        }
    });

}

createCars(['create c1',

    'create c2 inherit c1',

    'set c1 color red',

    'set c2 model new',

    'print c1',

    'print c2']);