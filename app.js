const fs = require('fs');


const fileName = 'example.txt';
const fileContent = 'This is an example file content.';


fs.writeFileSync(fileName, fileContent);
console.log(`File '${fileName}' created successfully.`);


const readContent = fs.readFileSync(fileName, 'utf8');
console.log(`File content: ${readContent}`);


const newFileName = 'new_example.txt';
fs.renameSync(fileName, newFileName);
console.log(`File '${fileName}' renamed to '${newFileName}' successfully.`);


const fileExists = fs.existsSync(newFileName);
console.log(`File '${newFileName}' exists: ${fileExists}`);


const fileStats = fs.statSync(newFileName);
console.log(`File size: ${fileStats.size} bytes`);
console.log(`File last modified: ${fileStats.mtime}`);


fs.unlinkSync(newFileName);
console.log(`File '${newFileName}' deleted successfully.`);


const fileAttributes = fs.constants;
console.log('File attributes:');
console.log(fileAttributes);


const filePath = './';
const isFile = fs.lstatSync(filePath).isFile();
const isDirectory = fs.lstatSync(filePath).isDirectory();
console.log(`'${filePath}' is a file: ${isFile}`);
console.log(`'${filePath}' is a directory: ${isDirectory}`);
