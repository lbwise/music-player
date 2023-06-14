const { mkdir, rm, readdir, appendFile, copyFile, readFile } = require('fs/promises');
const { existsSync } = require('fs');
const path = require('path');
const minifier = require('html-minifier').minify;

const build = async () => {
    const distPath = path.join(__dirname, '/dist');
    if (existsSync(distPath)) {
        await rm(distPath, { recursive: true });
    }
    await mkdir(distPath);
    await mkdir(path.join(distPath, '/assets'))
    await addTemplates();
    addAssets();
    // minify()
}

const addTemplates = async () => {
    const dest = path.join(__dirname, '/dist/index.html');
    const indexSrc = path.join(__dirname, '/src/index.html');
    await addContents(indexSrc, dest)
    const viewPath = path.join(__dirname, '/src/components');
    const views = await readdir(viewPath);
    for (const view of views) {
        const src = path.join(viewPath, '/', view);
        await addContents(src, dest)
    }
    console.log('Template build complete');
}

const addContents = async (src, dest) => {
   const buffer = await readFile(src); 
   const content = await buffer.toString();
   await appendFile(dest, content);
}

const addAssets = async () => {
    const assetPath = path.join(__dirname, '/src/assets');
    const assets = await readdir(assetPath, { recursive: true });
    for (const asset of assets) {
        const dest = path.join(__dirname, '/dist/assets', asset);
        const src = path.join(assetPath, asset);
        await copyFile(src, dest);
    }
    console.log('Copied assets over to dist');
}

const minify = async () => {
    const filePath = path.join(__dirname, '/dist/index.html')
    const dest = path.join(__dirname, '/dist/index.html.min')
    const html = await (await readFile(filePath, { recursive: true })).toString()
    const min = await minify(html)
    console.log(min);
    await appendFile(dest, min);
}

build()