const fs = require("fs");

const filePath = process.argv[2];

if (!filePath) {
  console.error("Usage: node print.js <file_path>");
  process.exit(1);
}

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error(`Error: ${err.message}`);
  } else {
    console.log(data);
  }
});