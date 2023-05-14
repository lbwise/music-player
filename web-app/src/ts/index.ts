import { SongItem } from "./components/SongItem.js";
import { NewSong } from "./components/NewSong.js";

export class App {

    constructor() {
        // define the components
        customElements.define('song-item', SongItem);
        customElements.define('new-song', NewSong)
    }
}

const app = new App();

// const submitBtn = document.getElementById('submit-song');
// submitBtn.addEventListener('click', addNewSong);

// const searchIcon = document.getElementById('search-icon');
// searchIcon.addEventListener('click', toggleSearch);

const showSongs = async (search: string) => {
    try {
        const URL = 'localhost:8080/api/v1/songs';
        const res = await fetch(URL, {
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin':'*'
            }
        });

        console.log(res.json());
    } catch(err) {
        console.log(err);
    }
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