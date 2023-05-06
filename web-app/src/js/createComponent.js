export const CreateComponent = (componentName) => {
    // const docName = convertToDocName(componentName)
    const docName = componentName.toLowerCase();
    return eval(`class ${componentName} extends HTMLName {
        constructor() {
            this.shadow = this.attachShadow({ mode: 'open' });
            this.shadow.innerHTML = '<object data="${docName}.html">';
        }
    }`);
};
const convertToDocName = (name) => {
    let newName = "";
    for (const char of name) {
        if (char === char.toUpperCase()) {
            break;
        }
        newName += char;
    }
    return newName;
};
//# sourceMappingURL=createComponent.js.map