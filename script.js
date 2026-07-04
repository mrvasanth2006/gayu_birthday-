const btn = document.getElementById("startBtn");

btn.addEventListener("click", () => {

    document.body.innerHTML = `
    
    <div class="hero">
    
        <h1>Hi Gayuu Babyyy...🥹❣️</h1>
        
        <p>
        Indha surprise...
        Unakkaaga mattum dhaan...🫂💖
        <br><br>
        Skip pannama
        Last varaikkum paakkanum...🤞🏻
        </p>
        
        <button onclick="nextPage()">
        Promise 🤞🏻
        </button>
    
    </div>
    
    `;

});

function nextPage(){

    document.body.innerHTML=`
    
    <div class="hero">
    
    <h1>Coming Soon...✨</h1>
    
    <p>
    📸 Photo Gallery<br>
    🎂 Birthday Cake<br>
    🎉 Confetti<br>
    💌 Surprise Ending<br><br>
    
    Website construction is in progress...🥹❣️
    
    </p>
    
    </div>
    
    `;

}
