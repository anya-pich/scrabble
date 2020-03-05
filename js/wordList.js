const fs = require("fs");
const wordsArray = fs.readFileSync("enable1.txt").toString().split("\r\n");
console.log(wordsArray);

const shortWords = wordsArray.filter(word => word.length < 10);
console.log(shortWords);

// fs.writeFile('words.js', shortWords, function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

// let wordStream = fs.createReadStream('words.js').toString().split(",");
// console.log(wordStream[0]);


const writeStream = fs.createWriteStream('words.txt');

const pathName = writeStream.path;

let array = shortWords;


// write each value of the array on the file breaking line
writeStream.write('const words = [');
array.forEach(value => writeStream.write(`"${value}", `));
writeStream.write('];');

// the finish event is emitted when all data has been flushed from the stream
writeStream.on('finish', () => {
   console.log(`wrote all the array data to file ${pathName}`);
});

// handle the errors on the write process
writeStream.on('error', (err) => {
    console.error(`There is an error writing the file ${pathName} => ${err}`)
});

// close the stream
writeStream.end();