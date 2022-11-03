const key = '0b24291856f84ad3b36456e6e7734d43'
const date = new Date().toISOString().split('T')[0]
const url = 'https://newsapi.org/v2/everything?' +
    `q=news&'from=${date}&sortBy=popularity&apiKey=${key}`;

fetch(url)
    .then(response => response.json())
    .then(response => showArticles(response.articles))

function showArticles(articles) {
    let output = "";

    for (article of articles) {
        if (!article.content.includes("Elon Musk")) {
            output += `
        <div class="card">
            <img
                src="${article.urlToImage}"
            />
            <a class="card-title" href="${article.url}">
                ${article.title}
            </a>
            <div class="card-content">
                ${article.description}
            </div>
        </div>
        `
        }
    }
    console.log(articles[0])
    document.getElementById('container').innerHTML = output;
}
