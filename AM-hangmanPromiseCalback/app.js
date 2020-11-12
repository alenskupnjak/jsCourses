const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');

// let game1 = new HangmanClass('Cat', 5);
let game1;
// puzzleEl.textContent = game1.getPuzzle;
// guessesEl.textContent = game1.getStatusMessage;

window.addEventListener('keypress', (e) => {
  const guess = String.fromCharCode(e.charCode);
  // console.log(' String.fromCharCode(e.charCode)= '  + guess);
  // console.log(game1)
  game1.makeGuess(guess);
  puzzleEl.textContent = game1.getPuzzle();
  guessesEl.textContent = game1.getStatusMessage();
});

const startGame = async () => {
  const puzzle = await getPuzzleFetchAsync('1');
  console.log(puzzle);
  game1 = new HangmanClass(puzzle, 6);
  puzzleEl.textContent = game1.getPuzzle();
  guessesEl.textContent = game1.getStatusMessage();
};

startGame();

document.querySelector('#reset').addEventListener('click', startGame);

//////////////////////////////////////////////////////////

// FETCH async function
getPuzzleFetchAsync('1')
  .then((data) => {
    console.log('getPuzzleFetchAsync', data);
  })
  .catch((err) => {
    console.log('greška u app.js ispisana = ' + err);
  });

// FETCH function
getPuzzleFetch('1')
  .then((data) => {
    console.log('getPuzzleFetch= ', data);
  })
  .catch((err) => {
    console.log('greška u app.js ispisana = ' + err);
  });

// PROMISE function
getPuzzlePromise('1').then(
  (puzzle) => {
    console.log('getPuzzlePromise= ', puzzle);
  },
  (err) => {
    console.log(err);
  }
);

// CALLBACK function
getPuzzleCallback('1', (error, puzzle) => {
  if (error) {
    console.log(`Error: ${error}`);
  } else {
    console.log('getPuzzleCallback= ' + puzzle);
  }
});

////////////////////////////////////////////////
// FETCH function
getCountryFetchAsync('AT')
  .then((data) => {
    console.log('Country Async= ', data);
  })
  .catch((err) => {
    console.log('greška FETCH function = ' + err);
  });

// FETCH function
getCountryFetch('IT')
  .then((data) => {
    console.log('Country Fetch= ', data);
  })
  .catch((err) => {
    console.log('greška FETCH function = ' + err);
  });

// PROMISE function
getCountryPromise('US').then(
  (country) => {
    console.log('Country Promise= ', country);
  },
  (err) => {
    console.log(err);
  }
);

// CALLBACK function
getCountryCallback('HR', (error, country) => {
  if (error) {
    console.log(`Error: ${error}`);
  } else {
    console.log('getCountryCallback= ' + country.name);
  }
});

// geolocation FETCH
geoLocation()
  .then((location) => {
    console.log(location);
    console.log(location.city);
    console.log(location.country);
    console.log(location.region);
  })
  .catch((err) => {
    console.log('geoLocation = ' + err);
  });

// geolocation FETCH async
geoLocatioAsync()
  .then((location) => {
    console.log(location);
  })
  .catch((err) => {
    console.log('geoLocation = ' + err);
  });

geoLocation()
  .then((location) => {
    return getCountryFetch(location.country);
  })
  .then((zemlja) => {
    console.log(zemlja);
  })
  .catch((err) => {
    console.log('geoLocation = ' + err);
  });
