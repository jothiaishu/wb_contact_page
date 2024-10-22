const fs = require("fs")
const path = require("path")
fs.readFile(path.join(__dirname, "fs.txt"), "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);

});
fs.writeFile(path.join(__dirname, "fsw.txt", "utf8", "my first write file"), function(err) {
    if (err) throw err;
    console.log("write complete");

});

// fs.writeFile('mynewfile3.txt', 'This is my text', function(err) {
//     if (err) throw err;
//     console.log('Replaced!');
// });

//exit on uncaught errors
process.on("uncaught exception", err => {
    console.error("the uncaught error is:  ${err}")
    process.exit(1)
})