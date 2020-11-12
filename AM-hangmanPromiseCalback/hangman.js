class HangmanClass {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guesLetters = [];
    this.status = 'playing';
  }

  calculateStatus() {
    let finished = false;
    const lettersUnguesser = this.word.filter((letter) => {
      return this.guesLetters.includes(letter);
    });

    if (lettersUnguesser.length === this.word.length) {
      // console.log('pogodak');
      finished = true;
    }

    // verzija 2
    // this.word.forEach( letter => {
    //     if(this.guesLetters.includes(letter)) {

    //     } else {
    //         finished = false
    //     }
    // })

    if (this.remainingGuesses === 0) {
      this.status = 'failed';
    } else if (finished) {
      this.status = 'finished';
    } else {
      this.status = 'playing';
    }
  }

  getStatusMessage() {
    if (this.status === 'playing') {
      return `Guesses left: ${this.remainingGuesses}`;
    } else if (this.status === 'failed') {
      return ` Nice try! The word is ${this.word.join('')}`;
    } else {
      return 'Bravo, pogodio si rijec';
    }
  }

  getPuzzle() {
    let puzzle = '';
    this.word.forEach((element) => {
      if (this.guesLetters.includes(element) || element === ' ') {
        puzzle += element;
      } else {
        puzzle += '*';
      }
    });
    return puzzle;
  }

  makeGuess(guess) {
    guess = guess.toLowerCase();
    const isUnique = this.guesLetters.includes(guess);
    const isGoodGuess = this.word.includes(guess);

    if (!isUnique) {
      this.guesLetters.push(guess);
    }

    if (!isGoodGuess && !isUnique) {
      this.remainingGuesses = this.remainingGuesses - 1;
    }
    this.calculateStatus();
  }
}

// izvedba funkcija
////////////////////////////////////////////////////
const Hangman = function (word, remainingGuesses) {
  this.word = word.toLowerCase().split('');
  this.remainingGuesses = remainingGuesses;
  this.guesLetters = [];
  this.status = 'playing';
};

Hangman.prototype.calculateStatus = function () {
  let finished = false;
  const lettersUnguesser = this.word.filter((letter) => {
    return this.guesLetters.includes(letter);
  });

  if (lettersUnguesser.length === this.word.length) {
    // console.log('pogodak');
    finished = true;
  }

  // verzija 2
  // this.word.forEach( letter => {
  //     if(this.guesLetters.includes(letter)) {

  //     } else {
  //         finished = false
  //     }
  // })

  if (this.remainingGuesses === 0) {
    this.status = 'failed';
  } else if (finished) {
    this.status = 'finished';
  } else {
    this.status = 'playing';
  }
};

Hangman.prototype.getStatusMessage = function () {
  if (this.status === 'playing') {
    return `Guesses left: ${this.remainingGuesses}`;
  } else if (this.status === 'failed') {
    return ` Nice try! The word is ${this.word.join('')}`;
  } else {
    return 'Bravo, pogodio si rijec';
  }
};

Hangman.prototype.getPuzzle = function () {
  let puzzle = '';
  this.word.forEach((element) => {
    if (this.guesLetters.includes(element) || element === ' ') {
      puzzle += element;
    } else {
      puzzle += '*';
    }
  });
  return puzzle;
};

Hangman.prototype.makeGuess = function (guess) {
  guess = guess.toLowerCase();
  const isUnique = this.guesLetters.includes(guess);
  const isGoodGuess = this.word.includes(guess);

  if (!isUnique) {
    this.guesLetters.push(guess);
  }

  if (!isGoodGuess && !isUnique) {
    this.remainingGuesses = this.remainingGuesses - 1;
  }
  this.calculateStatus();
};
