let guessedLetters = [];
let gameEnded = false;
const picture = document.querySelector("#hangmanPic");
const message = document.querySelector("#message");

let stage = 9;
picture.src = "images/" + stage +".png";

const secretWord = words[Math.floor(Math.random() * words.length)];
//const secretWord ="papapapapa";

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
      
      // When the game ends the keys dont't respond anymore
      if (gameEnded){
        
        return};

      const pressedKey = key.textContent;

      if (arrSecretword.includes(pressedKey)) {

        guessedLetters.push(pressedKey);
    
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
              picture.src = "images/win.gif";
              message.innerText="You won with " + (stage+1) + " attempts. Carlton is happy. Press here for another game";
              gameEnded = true;
              message.classList.add("activeMessage");
             }

          }
        }
      }
      else {

        key.classList.add("wrong");
        if (!gameEnded){stage++};
        picture.src = "images/" + stage +".png";
        
     
        if (stage === 10){
          message.innerText = "You lost, the secret word was '" + secretWord + "'. Press here for another game.";
          message.classList.add("activeMessage");
          gameEnded = true;
                  
          }
      }

        // add/remove shadow effect on key
    key.classList.add("pressed");
    setTimeout(() => key.classList.remove("pressed"), 70);
       
    });
  });

  message.addEventListener('click', () => {
    if (gameEnded){location.reload();} })