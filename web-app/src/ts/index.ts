import { SongItem } from './components/SongItem/SongItem.js';

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

const showSongs = (search: string): void => {
    console.log(search)
}

showSongs('search');

const toggleSearch = (): void => {
    const searchInput = document.getElementById('search-input') as HTMLInputElement;
    if (searchInput.style.display == 'none') {
        searchInput.style.display = 'inline'
        searchInput.value = '';
    } else {
        searchInput.style.display = 'none';
        const search = searchInput.value
        showSongs(search)
    }
}

function addNewSong(event) {
    const song = (document.getElementById('song') as HTMLInputElement).value;
    const artist = (document.getElementById('artist') as HTMLInputElement).value;
    const album = (document.getElementById('album') as HTMLInputElement).value;

    const newSongElement = document.createElement('div');
    newSongElement.className = 'song-row'
    const songElement = document.createElement('h3');
    songElement.innerText = song
    songElement.className = 'title'
    const artistElement = document.createElement('p');
    artistElement.innerText = artist
    artistElement.className = 'artist'
    const albumElement = document.createElement('p');
    albumElement.innerText = album 
    albumElement.className = 'album'

    newSongElement.appendChild(songElement)
    newSongElement.appendChild(albumElement)
    newSongElement.appendChild(artistElement)

    const songList = document.getElementById('song-list');
    songList.appendChild(newSongElement)
}