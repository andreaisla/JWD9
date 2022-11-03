const key = '0b24291856f84ad3b36456e6e7734d43'
const date = new Date().toISOString().split('T')[0]
const url = 'https://newsapi.org/v2/everything?' + 
    `q=news&'from=${date}&sortBy=popularity&apiKey=${key}`;

fetch(url)
    .then(response => response.json())
    // .then(response => showArticles(response.articles))

function showArticles(articles) {
    let output = '';
    
    // class content goes here
    
    document.getElementById('container').innerHTML = output;
}
