const C4 = new Audio("../Media/Sounds/C4.mp3");
const Db4 = new Audio("../Media/Sounds/Db4.mp3");
const D4 = new Audio("../Media/Sounds/D4.mp3");
const Eb4 = new Audio("../Media/Sounds/Eb4.mp3");
const E4 = new Audio("../Media/Sounds/E4.mp3");
const F4 = new Audio("../Media/Sounds/F4.mp3");
const Gb4 = new Audio("../Media/Sounds/Gb4.mp3");
const G4 = new Audio("../Media/Sounds/G4.mp3");
const Ab4 = new Audio("../Media/Sounds/Ab4.mp3");
const A4 = new Audio("../Media/Sounds/A4.mp3");
const Bb4 = new Audio("../Media/Sounds/Bb4.mp3");
const B4 = new Audio("../Media/Sounds/B4.mp3");
const C5 = new Audio("../Media/Sounds/C5.mp3");
const Db5 = new Audio("../Media/Sounds/Db5.mp3");
const D5 = new Audio("../Media/Sounds/D5.mp3");
const Eb5 = new Audio("../Media/Sounds/Eb5.mp3");
const E5 = new Audio("../Media/Sounds/E5.mp3");

const reproducir = audio => {
	const clonar = audio.cloneNode();
	clonar.play();
	setTimeout(() => (clonar.volume = 0.8), 400);
	setTimeout(() => (clonar.volume = 0.6), 800);
	setTimeout(() => (clonar.volume = 0.4), 1200);
	setTimeout(() => (clonar.volume = 0.2), 1600);
	setTimeout(() => (clonar.volume = 0), 2000);
};

///////////////////////////////////////////////////////////////////

// C4
 
 const TeclaC4 = document.querySelector(".C4");
 const playC4 = () => {
 	reproducir(C4);
 	TeclaC4.classList.add("activo");
 	setTimeout(() => TeclaC4.classList.remove("activo"), 200);	
 };
 TeclaC4.addEventListener("click", playC4);


// Db4
 
 const TeclaDb4 = document.querySelector(".Db4");
 const playDb4 = () => {
 	reproducir(Db4);
 	TeclaDb4.classList.add("activo");
 	setTimeout(() => TeclaDb4.classList.remove("activo"), 200);	
 };
 TeclaDb4.addEventListener("click", playDb4);

 // D4
 
 const TeclaD4 = document.querySelector(".D4");
 const playD4 = () => {
 	reproducir(D4);
 	TeclaD4.classList.add("activo");
 	setTimeout(() => TeclaD4.classList.remove("activo"), 200);	
 };
 TeclaD4.addEventListener("click", playD4);

 // Eb4
 
 const TeclaEb4 = document.querySelector(".Eb4");
 const playEb4 = () => {
 	reproducir(Eb4);
 	TeclaEb4.classList.add("activo");
 	setTimeout(() => TeclaEb4.classList.remove("activo"), 200);	
 };
 TeclaEb4.addEventListener("click", playEb4);

 // E4
 
 const TeclaE4 = document.querySelector(".E4");
 const playE4 = () => {
 	reproducir(E4);
 	TeclaE4.classList.add("activo");
 	setTimeout(() => TeclaE4.classList.remove("activo"), 200);	
 };
 TeclaE4.addEventListener("click", playE4);

 // F4
 
 const TeclaF4 = document.querySelector(".F4");
 const playF4 = () => {
 	reproducir(F4);
 	TeclaF4.classList.add("activo");
 	setTimeout(() => TeclaF4.classList.remove("activo"), 200);	
 };
 TeclaF4.addEventListener("click", playF4);

  // Gb4
 
 const TeclaGb4 = document.querySelector(".Gb4");
 const playGb4 = () => {
 	reproducir(Gb4);
 	TeclaGb4.classList.add("activo");
 	setTimeout(() => TeclaGb4.classList.remove("activo"), 200);	
 };
 TeclaGb4.addEventListener("click", playGb4);

   // G4
 
 const TeclaG4 = document.querySelector(".G4");
 const playG4 = () => {
 	reproducir(G4);
 	TeclaG4.classList.add("activo");
 	setTimeout(() => TeclaG4.classList.remove("activo"), 200);	
 };
 TeclaG4.addEventListener("click", playG4);

   // Ab4
 
 const TeclaAb4 = document.querySelector(".Ab4");
 const playAb4 = () => {
 	reproducir(Ab4);
 	TeclaAb4.classList.add("activo");
 	setTimeout(() => TeclaAb4.classList.remove("activo"), 200);	
 };
 TeclaAb4.addEventListener("click", playAb4);

   // A4
 
 const TeclaA4 = document.querySelector(".A4");
 const playA4 = () => {
 	reproducir(A4);
 	TeclaA4.classList.add("activo");
 	setTimeout(() => TeclaA4.classList.remove("activo"), 200);	
 };
 TeclaA4.addEventListener("click", playA4);

   // Bb4
 
 const TeclaBb4 = document.querySelector(".Bb4");
 const playBb4 = () => {
 	reproducir(Bb4);
 	TeclaBb4.classList.add("activo");
 	setTimeout(() => TeclaBb4.classList.remove("activo"), 200);	
 };
 TeclaBb4.addEventListener("click", playBb4);

   // B4
 
 const TeclaB4 = document.querySelector(".B4");
 const playB4 = () => {
 	reproducir(B4);
 	TeclaB4.classList.add("activo");
 	setTimeout(() => TeclaB4.classList.remove("activo"), 200);	
 };
 TeclaB4.addEventListener("click", playB4);

  // C5
 
 const TeclaC5 = document.querySelector(".C5");
 const playC5 = () => {
 	reproducir(C5);
 	TeclaC5.classList.add("activo");
 	setTimeout(() => TeclaC5.classList.remove("activo"), 200);	
 };
 TeclaC5.addEventListener("click", playC5);

  // Db5
 
 const TeclaDb5 = document.querySelector(".Db5");
 const playDb5 = () => {
 	reproducir(Db5);
 	TeclaDb5.classList.add("activo");
 	setTimeout(() => TeclaDb5.classList.remove("activo"), 200);	
 };
 TeclaDb5.addEventListener("click", playDb5);

  // D5
 
 const TeclaD5 = document.querySelector(".D5");
 const playD5 = () => {
 	reproducir(D5);
 	TeclaD5.classList.add("activo");
 	setTimeout(() => TeclaD5.classList.remove("activo"), 200);	
 };
 TeclaD5.addEventListener("click", playD5);

  // Eb5
 
 const TeclaEb5 = document.querySelector(".Eb5");
 const playEb5 = () => {
 	reproducir(Eb5);
 	TeclaEb5.classList.add("activo");
 	setTimeout(() => TeclaEb5.classList.remove("activo"), 200);	
 };
 TeclaEb5.addEventListener("click", playEb5);

  // E5
 
 const TeclaE5 = document.querySelector(".E5");
 const playE5 = () => {
 	reproducir(E5);
 	TeclaE5.classList.add("activo");
 	setTimeout(() => TeclaE5.classList.remove("activo"), 200);	
 };
 TeclaE5.addEventListener("click", playE5);



///////////////////////////////////////////////////////////////////



 window.addEventListener("keydown", ({keyCode}) => {

  // Press Q
  if (keyCode === 81) return playC4();

  // Press 2
  if (keyCode === 50) return playDb4();

  // Press W
  if (keyCode === 87) return playD4();

  // Press 3
  if (keyCode === 51) return playEb4();

  // Press E
  if (keyCode === 69) return playE4();

  // Press R
  if (keyCode === 82) return playF4();

  // Press 5
  if (keyCode === 53) return playGb4();

  // Press T
  if (keyCode === 84) return playG4();

  // Press 6
  if (keyCode === 54) return playAb4();

  // Press Y
  if (keyCode === 89) return playA4();

  // Press 7
  if (keyCode === 55) return playBb4();

  // Press U
  if (keyCode === 85) return playB4();

  // Press I
  if (keyCode === 73) return playC5();

  // Press 9
  if (keyCode === 57) return playDb5();

  // Press O
  if (keyCode === 79) return playD5();

  // Press 0 
  if (keyCode === 48) return playEb5();

  // Press P
  if (keyCode === 80) return playE5();

 })
