import { Component } from "../util/Component.js";


export class NewSong extends Component {

    constructor() {
        super('new-song');
    }

    // async render() {
    //     const template: HTMLTemplateElement = .querySelector('new-song')
    //     console.log(template);
    //     this.shadowRoot.appendChild(template.content.cloneNode(true));
    //     document.querySelector(".submit-song").addEventListener('click', this.addNewSong)
    // }

    addNewSong(event) {
        console.log('HIT');
        const newSong = document.createElement('song-item')
        newSong.setAttribute('song', (document.querySelector('.song') as HTMLInputElement).value);
        newSong.setAttribute('artist', (document.querySelector('.artist') as HTMLInputElement).value);
        newSong.setAttribute('album', (document.querySelector('.album') as HTMLInputElement).value);
        document.querySelector('.song-list').appendChild(newSong)
    }
}