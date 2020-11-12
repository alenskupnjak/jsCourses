'use strict'

console.log(location.hash);
console.log(location.hash.substring(1));

const titleElement = document.querySelector('#note-title');
const bodyElement = document.querySelector('#note-body');
const dateElement = document.querySelector('#last-edited')
const noteId = location.hash.substring(1);
let notes = getSavedNotes();


let note = notes.find( data => {
 return data.id === noteId
})

console.log(note);
console.log(!undefined);

if (!note) {
  location.assign('./index.html')
}
titleElement.value = note.title
bodyElement.value = note.body
dateElement.textContent = generateLastEdited (note.updatedAt);


titleElement.addEventListener('input', (e)=> {
  // console.log(e.target);
  // console.log(e.target.value);
  // console.log(note);
  
  note.title= e.target.value
  note.updatedAt = moment().valueOf()
  dateElement.textContent = generateLastEdited(note.updatedAt);
  savedNotes(notes)

})

bodyElement.addEventListener('input', (e)=> {
  // console.log(e);
  // console.log(e.target);
  // console.log(e.target.value);
  // console.log(note);
  
  note.body= e.target.value
  note.updatedAt = moment().valueOf()
  dateElement.textContent = generateLastEdited(note.updatedAt);
  savedNotes(notes)
})

document.querySelector('#remove-note').addEventListener('click', ()=>{
  removeNote(noteId)
  // notes.splice(noteId,1)
  savedNotes(notes)
  location.assign('./index.html')
})


window.addEventListener('storage', (e)=> {
  console.log(e);
  
if(e.key === 'notes') {
  notes = JSON.parse(e.newValue)
  let note = notes.find( data => {
    return data.id === noteId
   })
   
   
   if (!note) {
     location.assign('./index.html')
   }
   
   titleElement.value = note.title
   bodyElement.value = note.body
   dateElement.textContent = generateLastEdited (note.updatedAt);
}
})

