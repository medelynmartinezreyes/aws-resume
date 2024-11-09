const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://fkqp6mxbviqy2jem3ghhe23mve0ypxxw.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` This page has ${data} views!`;
}

updateCounter();