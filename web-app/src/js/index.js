import { SongItem } from './components/SongItem/SongItem.js';
console.log(new SongItem());
export class App {
    constructor() {
        // define the components
        console.log('testing');
        customElements.define('song-item', SongItem);
    }
}
// const submitBtn = document.getElementById('submit-song');
// submitBtn.addEventListener('click', addNewSong);
// const searchIcon = document.getElementById('search-icon');
// searchIcon.addEventListener('click', toggleSearch);
const showSongs = (search) => {
    console.log(search);
};
showSongs('search');
const toggleSearch = () => {
    const searchInput = document.getElementById('search-input');
    if (searchInput.style.display == 'none') {
        searchInput.style.display = 'inline';
        searchInput.value = '';
    }
    else {
        searchInput.style.display = 'none';
        const search = searchInput.value;
        showSongs(search);
    }
};
function addNewSong(event) {
    const song = document.getElementById('song').value;
    const artist = document.getElementById('artist').value;
    const album = document.getElementById('album').value;
    const newSongElement = document.createElement('div');
    newSongElement.className = 'song-row';
    const songElement = document.createElement('h3');
    songElement.innerText = song;
    songElement.className = 'title';
    const artistElement = document.createElement('p');
    artistElement.innerText = artist;
    artistElement.className = 'artist';
    const albumElement = document.createElement('p');
    albumElement.innerText = album;
    albumElement.className = 'album';
    newSongElement.appendChild(songElement);
    newSongElement.appendChild(albumElement);
    newSongElement.appendChild(artistElement);
    const songList = document.getElementById('song-list');
    songList.appendChild(newSongElement);
}
//# sourceMappingURL=index.js.map