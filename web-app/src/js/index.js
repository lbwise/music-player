var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { SongItem } from "./components/SongItem.js";
import { NewSong } from "./components/NewSong.js";
export class App {
    constructor() {
        // define the components
        customElements.define('song-item', SongItem);
        customElements.define('new-song', NewSong);
    }
}
const app = new App();
// const submitBtn = document.getElementById('submit-song');
// submitBtn.addEventListener('click', addNewSong);
// const searchIcon = document.getElementById('search-icon');
// searchIcon.addEventListener('click', toggleSearch);
const showSongs = (search) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const URL = 'localhost:8080/api/v1/songs';
        const res = yield fetch(URL, {
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        });
        console.log(res.json());
    }
    catch (err) {
        console.log(err);
    }
});
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
//# sourceMappingURL=index.js.map