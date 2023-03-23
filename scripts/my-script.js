console.log("Initialising console");

let stage = "1";
let guessedLetters = [];
const picture = document.querySelector("#hangmanPic");
picture.src = "images/" + stage +".png";

const secretWord = "Guessme";
//Split to create an array and with the map method it swaps each one for his uppercase equivalent
const arrSecretword = secretWord.split("").map(letter => letter.toUpperCase());
let hiddenWord = arrSecretword.map(() => "-");

const secretWordPanel = document.querySelector(".flex-container-secretWord")

// Add the arrSecretword to the flex-container-secretWord
hiddenWord.forEach(letter => {
  const p = document.createElement('p');
  p.textContent = letter;
  p.classList.add("iskey");
  secretWordPanel.appendChild(p);
});


const keys = document.querySelectorAll(".iskey");
  // Loop through the title elements and add a click event listener to each
  keys.forEach(key => {
    key.addEventListener('click', () => {
      
      const pressedKey = key.textContent
      console.log("Pressed " + pressedKey);


      if (arrSecretword.includes(pressedKey)) {

        guessedLetters.push(pressedKey);
        console.log(guessedLetters);

        for (let i = 0; i < arrSecretword.length; i++) {
          if (arrSecretword[i] === pressedKey) {
        
            //change background on secret word
            secretWordPanel.children[i].style.backgroundColor = "Green";
            secretWordPanel.children[i].style.filter = "none";

            //change letter in hiddenWord to correct letter
            hiddenWord[i] = pressedKey;
            secretWordPanel.children[i].textContent = pressedKey;

            //Change background on the keyboard
            key.classList.add("guessed");

            if (hiddenWord.join("") === arrSecretword.join("")) {
              console.log("Has ganado");}

          }
        }
      }
      else {
        key.classList.add("wrong");
        stage++;
        console.log("Stage " + stage);
        picture.src = "images/" + stage +".png";

        if (stage === 10){console.log("Muerte")}}

        //add/remove shadow effect on key
    key.classList.add("pressed");
    setTimeout(() => key.classList.remove("pressed"), 100);
       
    });
  });