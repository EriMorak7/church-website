const fs = require('fs');
const path = require('path');

const directory = './src';

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? 
            walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

walkDir(directory, function(filePath) {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        let content = fs.readFileSync(filePath, 'utf-8');
        let originalContent = content;
        
        // 1. Backgrounds & Texts
        // The user wants black text everywhere.
        content = content.replace(/text-white/g, 'text-black');
        content = content.replace(/text-black\/[0-9]+/g, (match) => match.replace('text-black', 'text-black'));
        content = content.replace(/text-white\/([0-9]+)/g, 'text-black/$1');
        
        // Background to cream where it was explicitly black. 
        // We defined --color-secondary as cream, or --color-bg-muted.
        content = content.replace(/bg-black/g, 'bg-secondary');
        
        // Section heights
        content = content.replace(/py-48/g, 'py-24');
        content = content.replace(/py-32/g, 'py-16');
        content = content.replace(/py-24/g, 'py-12');
        
        // Navbar sizes are specifically in Navbar.tsx but let's change text-[10px] to text-sm across
        content = content.replace(/text-\[10px\]/g, 'text-sm');
        
        // Increase header text sizes 
        // e.g. text-5xl md:text-7xl -> text-6xl md:text-8xl 
        content = content.replace(/text-7xl md:text-9xl/g, 'text-8xl md:text-[10rem]');
        content = content.replace(/text-6xl md:text-8xl/g, 'text-7xl md:text-9xl');
        content = content.replace(/text-5xl md:text-8xl/g, 'text-6xl md:text-9xl');
        content = content.replace(/text-5xl md:text-7xl/g, 'text-6xl md:text-8xl');
        content = content.replace(/text-4xl md:text-7xl/g, 'text-5xl md:text-8xl');
        content = content.replace(/text-4xl md:text-6xl/g, 'text-5xl md:text-7xl');

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf-8');
            console.log('Updated: ' + filePath);
        }
    }
});
