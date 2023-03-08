function modifyWorker(worker) {

    if (worker.dizziness === true) {
        worker.levelOfHydrated = worker.weight * 0.1 * worker.experience;
        worker.dizziness = false;
    }
    return worker;
}


modifyWorker({ weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true });

