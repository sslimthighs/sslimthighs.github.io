const images = [
    "01.jpg",
    "02.jpg",
    "03.jpg",
    "04.jpg",
    "05.jpg"
]

const backgroundDiv = document.createElement("div");
backgroundDiv.setAttribute("class", "bgImage");
const chosenImage = images[Math.floor(Math.random() * quotes.length)]
const bgImage = document.createElement("img")

// bgImage.src = `img/${chosenImage}`
// document.body.appendChild(bgImage)
backgroundDiv.style.backgroundImage = `url(img/${chosenImage})`;
document.body.appendChild(backgroundDiv);