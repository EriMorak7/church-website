const fs = require('fs');
const path = require('path');

const directory = './src';

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory) {
            walkDir(dirPath, callback);
        } else {
            callback(dirPath);
        }
    });
}

const colorRegexes = [
    /text-primary(\/[0-9]+)?/g,
    /text-secondary(\/[0-9]+)?/g,
    /text-white(\/[0-9]+)?/g,
    /text-slate-[0-9]+/g,
    /text-black\/[0-9]+/g,
    /text-gray-[0-9]+/g,
    /text-heading(\/[0-9]+)?/g,
    /text-muted(\/[0-9]+)?/g,
    /text-accent(\/[0-9]+)?/g,
];

walkDir(directory, function(filePath) {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        let content = fs.readFileSync(filePath, 'utf-8');
        let originalContent = content;
        
        // Remove text colors and replace with text-black
        colorRegexes.forEach(regex => {
            content = content.replace(regex, 'text-black');
        });

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf-8');
            console.log('Updated texts to pure black in: ' + filePath);
        }
    }
});
