function getArticleGenerator(articles) {


    return function () {
        if (articles.length > 0) {
            console.log(articles);
            const getContent = document.getElementById('content');
            let article = document.createElement('article');
            let getEl = articles.shift();
            article.innerText = getEl;
            getContent.appendChild(article);

        }


    }

}
