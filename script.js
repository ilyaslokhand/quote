const ApiUrl = "https://api.quotable.io/random";

const qoute = document.getElementById("quote");
const author = document.getElementById("author");

async function getquote(url) {
  const response = await fetch(url);
  var data = await response.json();
  qoute.innerHTML = data.content;
  author.innerHTML = data.author;
}

getquote(ApiUrl);

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      qoute.innerHTML +
      "....by" +
      author.innerHTML,
    "tweet window",
    "width=600, heigh=300"
  );
}
