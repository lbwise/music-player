export class Component extends HTMLElement {

    constructor(name) {
        super();
        const template: HTMLTemplateElement = document.querySelector('#' + name);
        console.log(template);
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.hydrate();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.shadowRoot.querySelector('.' + name).innerHTML = newValue; 
    }

    hydrate() {
        const names = this.getAttributeNames();
        for (const name of names) {
            this.shadowRoot.querySelector("." + name).innerHTML = this.getAttribute(name);
        }
    }
}
