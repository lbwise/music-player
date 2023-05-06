export class SpecialComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = '<object data="test.html" >';
    }
}
//# sourceMappingURL=component.js.map