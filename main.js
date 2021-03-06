
//elements from html
 
const artist = document.getElementById("artist");
const song = document.getElementById("song");
const button = document.getElementById("button-search");
const result = document.getElementById("result");
const lyricsBox = document.getElementById("lyricsBox");
const form = document.getElementById("form");
 
// global variabel for textarea
let textarea = null;
 
//API
function getUrl(artist, song) {
 return `http://ianertson.com:3500/${artist}/${song}`;
}
 
 
//async function Search by song and artist
//try, catch (display error in html from catch)
async function getLyrics(artist, song) {
 try {
 
 if (artist.value.trim() == "" || song.value.trim() == "") {
 result.innerHTML = "You have to input artist and songname";
 ('disabled', 'disabled')
 } else {
 button.removeAttribute("disabled");
 const url = getUrl(artist.value.trim(), song.value.trim());
 const res = await fetch(url);
 const data = await res.json();
 
 const displayLyrics = data[0].lyrics;
 
 displaySongs(displayLyrics);
 }
 } catch (err) {
 result.innerHTML = err.message;
 }
}
 
//function that shows lyrics in html element result
 
function displaySongs(displayLyrics) {
 
 // ta bort gammal textarea
 if (textarea) {
 textarea.parentNode.removeChild(textarea);
 }
 
 // skapa ny textarea
 textarea = document.createElement("textarea");
 
 lyricsBox.appendChild(textarea);
 
 textarea.innerText = displayLyrics;
 
 const length = displayLyrics.length;
 if (length > 130) {
 textarea.style.height = "50vh";
 textarea.style.width = "50vh";
 
 }
}
 
//Event listener
button.addEventListener("click", (event) => {
 event.preventDefault();
 getLyrics(artist, song);
});
 
function manage() {
    var bt = document.getElementById('button-search');
    if (artist.value != ''  &&  song.value !='' ) {
        bt.disabled = false;
    }
    else {
        bt.disabled = true;
    }
}

   



 
