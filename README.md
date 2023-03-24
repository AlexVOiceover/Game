# Hangman Game
This is a simple implementation of the classic game "Hangman" using JavaScript and HTML.

## How to Play
1. When the game starts, you will see a hidden word represented by dashes (-) on the screen.

2. To guess a letter in the word, click on the corresponding key on the virtual keyboard.

3. If the letter is in the word, it will be revealed in its correct position(s) and turn green.

4. If the letter is not in the word, a part of the hangman figure will be drawn and the key will turn red.

5. Keep guessing until you have correctly identified all the letters in the word or until the hangman figure is complete.

6. If you identify all the letters in the word, you win! If the hangman figure is complete, you lose.

7. You can start a new game at any time by clicking the "Press here for another game" message that appears when the game ends.

## Code Overview
The game is built using JavaScript and HTML. The main file is index.html, which contains the game's interface. The game logic is implemented in the scripts folder, specifically in the hangman.js file.

The game uses an array of words (words.js) that is randomly selected from to choose the word to be guessed.

The game uses the following global variables:

* guessedLetters: an array that stores the letters guessed by the player.
* gameEnded: a Boolean value that indicates whether the game has ended.
* picture: a reference to the img element that displays the hangman figure.
* message: a reference to the h2 element that displays messages to the player.
stage: a number that keeps track of the number of incorrect guesses made by the player.
The game flow is controlled by the keys event listener, which listens for clicks on the virtual keyboard. When a key is clicked, the listener checks whether the letter is in the hidden word and responds accordingly. If the letter is in the word, the letter is revealed and the keyboard key turns green. If the letter is not in the word, the hangman figure is drawn and the key turns red.

When the game ends, a message is displayed indicating whether the player has won or lost. The message includes a clickable link to start a new game.