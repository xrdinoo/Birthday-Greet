const btnYes = document.querySelector(".btn-yes");
const cakeGif = document.querySelector("#cakeGif");
const emojiGif = document.querySelector("#emojiGif");
const birthdayMsg = document.querySelector("#birthdayMsg");

btnYes.addEventListener("click", () => {
    // Hide the cake gif
    cakeGif.classList.add("hide");
    
    // Show the "Happy Birthday" message
    birthdayMsg.classList.remove("hide");
    
    // Show the emoji gif
    emojiGif.classList.remove("hide");
    
    // Hide the "Blow the Cake" button
    btnYes.classList.add("hide");
});
