fetch("https://icanhazdadjoke.com/slack")
.then(data => data.json())
.then(jokesData => document.getElementById('jokeElement').innerHTML = jokesData.attachments[0].text)

var rgb = [Math.random() * 256, Math.random() * 256, Math.random() * 256];
document.querySelector(".textContainer").style.backgroundColor = "rgb("+rgb.join(',')+")"