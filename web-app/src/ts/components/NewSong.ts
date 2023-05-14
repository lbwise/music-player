import { Component } from "../util/Component.js";

export class NewSong extends Component {

    constructor() {
        super('new-song');
    }

    render() {
        this.shadowRoot.innerHTML = `
            <section class="new-song">
                <label for="song">Song</label>
                <input type="text" name="song" class="song">
                <label for="artist">Artist</label>
                <input type="text" name="artist" class="artist">
                <label for="album">Album</label>
                <input type="text" name="album" class="album">
         
                <button id="submit-song">Add</button>
            </section>
        `

        document.querySelector(".submit-song").addEventListener('click', this.addNewSong)
    }

    addNewSong(event) {
        console.log('HIT');
        const newSong = document.createElement('song-item')
        newSong.setAttribute('song', (document.querySelector('.song') as HTMLInputElement).value);
        newSong.setAttribute('artist', (document.querySelector('.artist') as HTMLInputElement).value);
        newSong.setAttribute('album', (document.querySelector('.album') as HTMLInputElement).value);
        document.querySelector('.song-list').appendChild(newSong)
    }
}