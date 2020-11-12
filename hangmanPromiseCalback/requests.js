// FETCH async function
const getPuzzleFetchAsync = async (wordCount) => {
  const response = await fetch(
    `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`
  );
  let data = await response.json();
  return data.puzzle;
};

// FETCH  function
const getPuzzleFetch = (wordCount) => {
  return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then(
    (data) => {
      if (data.status === 200) {
        return data.json();
      } else {
        throw new Error('greška 01');
      }
    }
  );
  // .catch((err) =>{
  //         console.log('Greška iz getPuzzleFetch '+ err);
  // })
};

// PROMISE function
const getPuzzlePromise = (wordCount) =>
  new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', (e) => {
      if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText);
        resolve(data.puzzle);
      } else if (e.target.readyState === 4) {
        reject('An error has taken place');
      }
    });

    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    request.send();
  });

// CALLBACK function
const getPuzzleCallback = (wordCount, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      callback(undefined, data.puzzle);
    } else if (e.target.readyState === 4) {
      callback('An error has taken place', undefined);
    }
  });

  request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
  request.send();
};

///////////////////////////////   COUNTRY   ////////////////////////////////
// FETCH  async function
const getCountryFetchAsync = async (countryCode) => {
  const response = await fetch(`https://restcountries.eu/rest/v2/all`);
  let data = await response.json();

  return data.find((country) => {
    return country.alpha2Code === countryCode;
  });
};

// FETCH function
const getCountryFetch = (countryCode) => {
  return fetch(`https://restcountries.eu/rest/v2/all`)
    .then((data) => {
      if (data.status === 200) {
        return data.json();
      } else {
        throw new Error('getCountryFetch');
      }
    })
    .then((data) => {
      return data.find((country) => {
        return country.alpha2Code === countryCode;
      });
    });
};

// PROMISE function
const getCountryPromise = (countryCode) =>
  new Promise((response, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', (e) => {
      if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText);
        const country = data.find((country) => {
          return country.alpha2Code === countryCode;
        });
        response(country);
      } else if (e.target.readyState === 4) {
        reject('Unable to fetch  data, PROMISE function');
      }
    });

    request.open('GET', `https://restcountries.eu/rest/v2/all`);
    request.send();
  });

// CALLBACK function
const getCountryCallback = (countryCode, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      const country = data.find((country) => {
        return country.alpha2Code === countryCode;
      });

      callback(undefined, country);
    } else if (e.target.readyState === 4) {
      callback('Unable to fetch  data, CALLBACK function', undefined);
    }
  });

  request.open('GET', `https://restcountries.eu/rest/v2/all`);
  request.send();
};

// FETCH function
const geoLocation = () => {
  return fetch(`https://ipinfo.io/json?token=dbc0236c336141`).then((data) => {
    if (data.status === 200) {
      return data.json();
    } else {
      throw new Error('geoLocation');
    }
  });
};

const geoLocatioAsync = async () => {
  let response = await fetch(`https://ipinfo.io/json?token=dbc0236c336141`);
  let data = await response.json();
  return data;
};
