const re = /\(\d\d?:\d\d? - \d\d?:\d\d?\)/ig;

for (let button of document.body.querySelectorAll("a")) {
    button.onclick = () => setTimeout(removeSATimes, 50);
}

function removeSATimes() {
    for (let element of document.body.querySelectorAll("li")) {
        element.childNodes[0].textContent = element.childNodes[0].textContent.replaceAll(re, "")
    }
}