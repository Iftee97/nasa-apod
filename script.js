const title = document.getElementById("title");
const date = document.getElementById("date");
const explanation = document.getElementById("explanation");
const apodImg = document.getElementById("apodImg");

const apiKey =
  "https://api.nasa.gov/planetary/apod?api_key=KskWhSOeyIsUoxUiIaGcBfqTDNy3lvdBbBYcm3wu";

fetch(apiKey)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    title.innerText = data.title;
    date.innerText += `Today: ${data.date}`;
    explanation.innerText = data.explanation;
    apodImg.src = data.url;
  });
