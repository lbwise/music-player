import { Component } from "../util/Component.js";

export class SongItem extends Component {

    constructor() {
        super('song-item');
    }
    
    async render() {
        this.shadowRoot.innerHTML = `
        <div class="song-row">
            <h3 class="title"></h3>
            <p class="album"></p>
            <p class="artist"></p>
        </div>`;
    }
    //     const sheet = new CSSStyleSheet();
    //     sheet.replaceSync(`.song-row {
    //         display: flex;
    //         flex-direction: row;
    //         justify-content: space-around;
    //         align-items: center;
    //         width: 60%;
    //         height: 4vh;
    //         margin: 0 auto;
    //         margin-top: 10px;
    //         padding: 5px 20px;
    //         background-color: #e1dcdc;
    //         border-radius: 15px;
    //         box-shadow: 3px 3px 4px rgb(34, 54, 67);
    //     }`);

    //     this.shadowRoot.adoptedStyleSheets = [sheet];
    // }
}