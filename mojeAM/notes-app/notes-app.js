'use strict'

let notes = getSavedNotes();

console.log(document.querySelector('#filter-by').value);


const filters = {
    searchText: '',
    sortBy:document.querySelector('#filter-by').value
}


// prilikom ucitavanja stranice generiramo DOM
renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {    
    e.target.textContent = 'The button was clicked'
    const idLink = uuidv4();
    const timeStamp = moment().valueOf()
    notes.push({
        id: idLink,
        title:'',
        body:'',
        createAt: timeStamp,
        updatedAt: timeStamp
    })
    savedNotes(notes)
    // renderNotes(notes, filters)
    // location.assign('./edit.html' + '#' + idLink)
    location.assign(`./edit.html#${idLink}`)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})


window.addEventListener('storage', (e)=> {
    console.log(e);
  if(e.key === 'notes') {
    notes = JSON.parse(e.newValue)
    renderNotes(notes, filters);
  }
   
})


const now1 = new Date('January 21 2001 6:25:01')
console.log(now1);
const now2 = new Date()
const timestamp = now2.getTime()
console.log(timestamp);
const myDate = new Date(timestamp)
console.log(myDate);
console.log(myDate.getFullYear());




console.log(now2-now1);

console.log(`Godina: ${now1.getFullYear()}`);

const now = moment()
console.log(now.toString());
// now.minute(1)
console.log(now.toString());
console.log(now.minute());
console.log(now.format('MMM Do, YYYY'));
now.add(1, 'week').subtract(20, 'days').hours(23).minutes(0).seconds(0);
console.log(now.fromNow());


const nowTimestamp = now.valueOf()
console.log(nowTimestamp);
console.log(moment(nowTimestamp).toString());



console.log(moment().year(2009).hours(0).minutes(0).seconds(0));
console.log(moment().year(2009).hours(0).minutes(0).seconds(0).add(1,'d').add(1,'M'));







