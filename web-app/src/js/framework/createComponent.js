export const CreateComponent = (componentName) => {
    console.log('got this at least');
    return class extends HTMLElement {
        constructor() {
            super();
        }
        connectedCallback() {
            console.log('hit here');
            this.attachShadow({ mode: 'open' });
            this.shadowRoot.innerHTML = `<object data="${componentName}.html" >`;
        }
    };
};
//# sourceMappingURL=createComponent.js.map