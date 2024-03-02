
const fs = require('fs')
fs.readFile('file.txt', 'utf8', function (err, file) {
    if (err) throw err;
    console.log(file);
    console.log("Hi")
   });
   