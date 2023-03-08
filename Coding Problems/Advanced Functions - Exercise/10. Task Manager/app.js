function solve() {
    //get main elements
    const taskArea = document.getElementById('task');
    const descriptionArea = document.getElementById('description');
    const dateArea = document.getElementById('date');
    const addBtn = document.getElementById('add');
    const openSection = document.querySelector(
        'section:nth-of-type(2) > div:nth-of-type(2)'
    );
    const inProgressSection = document.getElementById('in-progress');
    const completeSection = document.querySelector(
        'section:nth-of-type(4) > div:nth-of-type(2)'
    );

    addBtn.addEventListener('click', addTask); //add button click -> add task

    function addTask(e) {
        e.preventDefault(); //prevent reload on click
        //get values
        const task = taskArea.value;
        const desc = descriptionArea.value;
        const date = dateArea.value;

        if (!task || !desc || !date) { //if none, fn doesnt work
            return;
        }

        //else use function invocation to create article for the Open section
        createArticle('open', 'green', 'red', task, desc, date);
    }

    function createArticle(section, btnClass1, btnClass2, task, desc, date) {
        //create article tree
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        h3.textContent = task;
        const pDesc = document.createElement('p');
        pDesc.textContent = `Description: ${desc}`;
        const pDate = document.createElement('p');
        pDate.textContent = `Due Date: ${date}`;

        article.appendChild(h3);
        article.appendChild(pDesc);
        article.appendChild(pDate);

        //check which section we are on, and append to it
        if (section === 'open') {
            //add to Open section
            //create innerDiv which is the only thing that differs between the sections
            const innerDiv = document.createElement('div');
            innerDiv.className = 'flex';
            const greenBtn = document.createElement('button');
            greenBtn.textContent = 'Start';
            greenBtn.className = btnClass1; //green
            greenBtn.addEventListener('click', () => {
                deleteArticle(article); //delete through another fn that has access to curr article
                createArticle('inProgress', 'red', 'orange', task, desc, date); //create article for inProgress section
            });
            const redBtn = document.createElement('button');
            redBtn.textContent = 'Delete';
            redBtn.className = btnClass2; //red
            redBtn.addEventListener('click', () => deleteArticle(article));

            //append to open section
            innerDiv.appendChild(greenBtn);
            innerDiv.appendChild(redBtn);
            article.appendChild(innerDiv);
            openSection.appendChild(article);
        } else if (section === 'inProgress') {
            //add to In Progress section
            const innerDiv = document.createElement('div');
            innerDiv.className = 'flex';
            const redBtn = document.createElement('button');
            redBtn.textContent = 'Delete';
            redBtn.className = btnClass1; //red
            redBtn.addEventListener('click', () => deleteArticle(article));
            const orangeBtn = document.createElement('button');
            orangeBtn.textContent = 'Finish';
            orangeBtn.className = btnClass2; //orange
            orangeBtn.addEventListener('click', () => {
                deleteArticle(article);
                createArticle('complete', _, _, task, desc, date); //null, '_' or _ -> wouldnt add class to the btns
            });

            innerDiv.appendChild(redBtn);
            innerDiv.appendChild(orangeBtn);
            article.appendChild(innerDiv);
            inProgressSection.appendChild(article);
        } else if (section === 'complete') {
            //appendChild to Complete section
            completeSection.appendChild(article);
        }

        function deleteArticle(article) {//fn to delete article on click
            article.remove();
        }
    }
}