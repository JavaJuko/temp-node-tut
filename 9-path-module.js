const path = require('path');

//path separator used by system
console.log(path.sep);
//joins segments returns normalized path
const filePath = path.join('\\content', 'subfolder', 'test.txt');
console.log(filePath);
//retruns the file name in the path
const base = path.basename(filePath);
console.log(base);
//returns the absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
