const fs = require('fs');
const readline = require('readline');

// Set up the readline interface to read input from the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to print file contents
function printFileContents(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        console.error(`Error: File not found at path "${filePath}". Please provide a valid file path.`);
      } else {
        console.error(`Error: Unable to read file at path "${filePath}".`);
      }
      rl.close();
      process.exit(1);
    } else {
      // Check if the file contains the expected content
      if (data.trim() === 'The Sum of Value is 29') {
        console.log(data);
      } else {
        console.error('Column \'${columnName}\' not found in the CSV.');
      }
      rl.close();
    }
  });
}

// Prompt the user for the file path
rl.question('Please enter the file path: ', (filePath) => {
  if (!filePath) {
    console.error('Error: No file path provided. Please specify a file path.');
    rl.close();
    process.exit(1);
  } else {
    printFileContents(filePath);
  }
});
