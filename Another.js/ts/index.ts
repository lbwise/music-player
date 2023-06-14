import { CreateComponent } from "./util/Component.js";
import { Compiler } from './util/Compiler.js';
import fs from 'fs/promises';

export class WebApp {

    componentPath: string;
    compiler: Compiler;

    constructor(componentPath) {
        this.compiler = Compiler();
        this.componentPath = componentPath || './Components';
    }

    async createComponents() {
        const componentFiles = await fs.readdir(this.componentPath);
        for (const component of componentFiles) {
            const componentName = component.slice(0, -2);
            console.log('defining', componentName);
            customElements.define(componentName, CreateComponent(componentName))
        }
    }

    async compile() {

    }
}

const webApp = new WebApp();

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

// showSongs('search');

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