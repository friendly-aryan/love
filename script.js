// 🍫 Chocolate click animation
let chocoState = 0;
const choco = document.getElementById("mainChoco");
const biteSound = document.getElementById("biteSound");

const chocoStates = [
  "assets/choco1.png",
  "assets/choco2.png",
  "assets/choco3.png"
];

if (choco) {
  choco.addEventListener("click", () => {
    biteSound.currentTime = 0;
    biteSound.play();

    chocoState++;

    if (chocoState < chocoStates.length) {
      choco.src = chocoStates[chocoState];
    } else {
      choco.style.opacity = 0;
      choco.style.pointerEvents = "none";

      setTimeout(() => {
        choco.src = chocoStates[0];
        choco.style.opacity = 1;
        choco.style.pointerEvents = "auto";
        chocoState = 0;
      }, 2000);
    }
  });
}

// 💌 Envelope click = show letter
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letterText");
const envelopeSound = document.getElementById("envelopeSound");

if (envelope && letter && envelopeSound) {
  envelope.addEventListener("click", () => {
    envelopeSound.currentTime = 0;
    envelopeSound.play();

    envelope.classList.add("hidden");

    setTimeout(() => {
      letter.classList.add("show");
    }, 600);
  });
}
