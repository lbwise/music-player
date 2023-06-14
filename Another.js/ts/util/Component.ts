class Component extends HTMLElement {

    constructor(name) {
        super();
        const template: HTMLTemplateElement = document.querySelector('#' + name);
        const shadowRoot = this.attachShadow({ mode: 'open' });
        console.log(template.content);
        shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.render();
        this.getProps();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.shadowRoot.querySelector('#1' + name).innerHTML = newValue; 
    }

    getProps() {
        const script = document.createElement('script');
        const data = {}
        const infoAttr = 'data-info';
        const names = this.getAttributeNames();
        for (const name of names) {
            this.shadowRoot.querySelector("#" + name).innerHTML = this.getAttribute(name);
            data[name] = this.getAttribute(name);
        }
        const dataJson = JSON.stringify(data)
        script.setAttribute(infoAttr, dataJson);
        script.innerText = `let getProps = (prop) => { const data = document.currentScript.getAttribute(${infoAttr}); const props = JSON.parse(data); return props[prop]; }`;
        this.shadowRoot.appendChild(script)
    }

    render() {}
}

export const CreateComponent = (name) => {
    return class extends Component {
        constructor() {
            super(name);
        }
    }
}