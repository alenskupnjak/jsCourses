'use strict'

// Check for localstorage data
const getSavedNotes = function () {
  const notesJSON = localStorage.getItem('notes');
  try {
    return notesJSON ? JSON.parse(notesJSON) : [];
  } catch (e) {
    return []
  }
 


  // if (notesJSON) {
  //   return JSON.parse(notesJSON);
  // } else {
  //   return [];
  // }
};

// Save notes to local storage
const savedNotes = function (notes) {
  localStorage.setItem('notes', JSON.stringify(notes));
};


// Remove note from list
const removeNote = function (id) {
  const noteIndex = notes.findIndex((data) => {
    return data.id === id;
  });

  if(noteIndex > -1) {
    notes.splice(noteIndex,1)
  }
};

// generate DOM
const generateDOM = function (note) {
  const noteEl = document.createElement('div');
  const textEl = document.createElement('a');
  const button = document.createElement('button');
  const komentar = document.createComment('p');

  // setup remove button
  button.textContent = 'x';
  noteEl.appendChild(button);
  button.addEventListener('click', () => {
    removeNote(note.id);
    savedNotes(notes)
    renderNotes(notes, filters);
  });

  if (note.title.length > 0) {
    textEl.textContent = note.title;
  } else {
    komentar.textContent = 'nema nista';
    textEl.textContent = 'Unamed note';
  }
  noteEl.appendChild(komentar);
  textEl.setAttribute('href',`./edit.html#${note.id}`)
  noteEl.appendChild(textEl);

  return noteEl;
};

// Sort your notes bay one of 3 ways

const sortNotes = function(notes, sortBy) {
  console.log(sortBy);
  console.log(notes);
  
  if (sortBy === 'byEdited') {
    return notes.sort((a,b) => {
      if( a.updatedAt > b.updatedAt) {
        return -1
      } else if (a.updatedAt > b.updatedAt) {
        return 1
      } else {
        return 0
      }
    })
  } else if (sortBy === 'byCreated') {
    return notes.sort((a,b) => {
      if( a.createAt > b.createAt) {
        return -1
      } else if (a.createAt > b.createAt) {
        return 1
      } else {
        return 0
      }
    })
  } else {
    return notes.sort((a,b) => {
      if( a.title > b.title) {
        return -1
      } else if (a.title > b.title) {
        return 1
      } else {
        return 0
      }
    })
  }
}

// renderiranje stranice
const renderNotes = function (notes, filters) {
  console.log(notes, filters);
  
  notes = sortNotes(notes, filters.sortBy)
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector('#notes').innerHTML = '';

  filteredNotes.forEach(function (note) {
    const noteEl = generateDOM(note);
    document.querySelector('#notes').appendChild(noteEl);
  });
};

// Generate the last message

const generateLastEdited = function (timeStamp) {
  return `Last edited ${moment(timeStamp).fromNow()}`
}
