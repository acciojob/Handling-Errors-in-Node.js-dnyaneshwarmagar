// const fs = require('fs');

// function printFileContents(filePath) {
//   // TODO: Use fs.readFile to read the file contents
// }

// // TODO: Call printFileContents with the command-line argument
const fs = require('fs');

function printFileContents(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        console.error(`Error: File not found at path "${filePath}". Please provide a valid file path.`);
      } else {
        console.error(`Error: Unable to read file at path "${filePath}".`);
      }
      process.exit(1);
    } else {
      console.log(data);
    }
  });
}

// Get the file path from the command-line arguments
const filePath = process.argv[2];

if (!filePath) {
  console.error('Error: No file path provided. Please specify a file path as a command-line argument.');
  process.exit(1);
}

// Call printFileContents with the command-line argument
printFileContents(filePath);
