export class Component extends HTMLElement {
    constructor(name) {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
        this.hydrate();
    }
    attributeChangedCallback(name, oldValue, newValue) {
        this.shadowRoot.querySelector('.' + name).innerHTML = newValue;
    }
    render() {
        // const template = this.shadowRoot.firstChild as HTMLTemplateElement;
        this.shadowRoot.innerHTML = '';
    }
    hydrate() {
        const names = this.getAttributeNames();
        for (const name of names) {
            this.shadowRoot.querySelector("." + name).innerHTML = this.getAttribute(name);
        }
    }
}
//# sourceMappingURL=Component.js.map