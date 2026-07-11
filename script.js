const startBtn = document.getElementById("startBtn");
const home = document.getElementById("home");
const hearts = document.getElementById("hearts");
const confetti = document.getElementById("confetti");

const photos = [
  "photo1.jpg",
  "photo2.jpg",
  "photo3.jpg",
  "photo5.jpg",
  "photo6.jpg",
  "photo7.jpg"
];

// Floating Hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = ["❤️","💖","💕","💗","💞"][Math.floor(Math.random()*5)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (18 + Math.random() * 28) + "px";
  heart.style.animationDuration = (5 + Math.random() * 5) + "s";
  hearts.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

setInterval(createHeart, 300);

// Start
startBtn.addEventListener("click", () => {
  startBtn.disabled = true;
  showSlideshow();
});

// Slideshow
function showSlideshow() {

  home.innerHTML = `
    <h1>Happy Birthday My Love ❤️</h1>
    <img id="slide" src="${photos[0]}">
  `;

  const slide = document.getElementById("slide");

  let i = 0;

  const interval = setInterval(() => {

    slide.style.opacity = 0;

    setTimeout(() => {
      i++;

      if (i >= photos.length) {
        clearInterval(interval);
        showCake();
        return;
      }

      slide.src = photos[i];
      slide.style.opacity = 1;

    }, 700);

  }, 3500);

}

// Cake
function showCake() {

  home.innerHTML = `
    <div id="cake">🎂</div>
    <h1 style="margin-top:25px;">Make a Wish... ✨</h1>
  `;

  setTimeout(() => {
    blastConfetti();
    showFinal();
  }, 5000);

}

// Confetti
function blastConfetti() {

  for (let i = 0; i < 250; i++) {

    const piece = document.createElement("div");

    piece.style.position = "fixed";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.top = "-20px";
    piece.style.width = "8px";
    piece.style.height = "14px";
    piece.style.background = `hsl(${Math.random()*360},100%,60%)`;
    piece.style.opacity = "1";
    piece.style.borderRadius = "2px";
    piece.style.pointerEvents = "none";
    piece.style.zIndex = "999";

    const duration = 3000 + Math.random() * 3000;

    piece.animate([
      {
        transform: `translateY(0px) rotate(0deg)`
      },
      {
        transform: `translateY(${window.innerHeight+100}px) rotate(${Math.random()*1080}deg)`
      }
    ],{
      duration: duration,
      easing: "linear"
    });

    confetti.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, duration);

  }

}

// Final Message
function showFinal() {

  home.innerHTML = `
    <div class="final">
      <h1>Happy Birthday My Queen 👸🏻❤️</h1>

      <p style="margin-top:30px;font-size:28px;">
        I Love You Forever 🫂❤️
      </p>

      <p style="margin-top:40px;font-size:24px;color:#ffd6f0;">
        — உன்னவன் Vasanth ❣️
      </p>
    </div>
  `;

}
