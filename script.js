const btn = document.getElementById("startBtn");

const photos = [
  "photo1.jpg",
  "photo2.jpg",
  "photo3.jpg",
  "photo5.jpg",
  "photo6.jpg",
  "photo7.jpg"
];

let current = 0;

btn.addEventListener("click", () => {

document.body.innerHTML = `

<div class="container">

<h1 style="font-size:2.8rem;">
Hi Gayuu Babyyy...🥹❣️
</h1>

<p style="margin-top:20px;font-size:20px;line-height:1.8;">
Indha surprise...
<br><br>
Unakkaaga mattum dhaan...🫂💖
<br><br>
Skip pannama
Last varaikkum paakkanum...🤞🏻
</p>

<br>

<button id="promiseBtn">
Promise 🤞🏻
</button>

</div>

`;

const promiseBtn = document.getElementById("promiseBtn");

promiseBtn.style.padding = "15px 35px";
promiseBtn.style.border = "none";
promiseBtn.style.borderRadius = "50px";
promiseBtn.style.background = "#ff4da6";
promiseBtn.style.color = "white";
promiseBtn.style.fontSize = "20px";
promiseBtn.style.cursor = "pointer";
promiseBtn.style.boxShadow = "0 0 20px #ff4da6";

promiseBtn.addEventListener("click", memories);

});

function memories() {

document.body.innerHTML = `

<div class="container">

<h1>Our Memories 🥹❣️</h1>

<img id="slide"
src="${photos[0]}"
style="
width:300px;
height:400px;
object-fit:cover;
border-radius:20px;
box-shadow:0 0 30px #ff4da6;
margin-top:20px;
transition:opacity .8s ease;
">

<p style="margin-top:25px;font-size:20px;">
Every photo with you...🫂❣️
</p>

</div>

`;

const slide = document.getElementById("slide");

setInterval(() => {

current = (current + 1) % photos.length;

slide.style.opacity = "0";

setTimeout(() => {

slide.src = photos[current];

slide.style.opacity = "1";

}, 500);

}, 3000);

}
