console.log("Hello World!\n==========\n");


// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2,22,12,17,18,39,129];


function arraySum(numbers) {

    let sum = 0; 
    
    numbers.forEach(number => {
        console.log(number);
        sum += number;
    });
    return sum;
} 

console.log(`Sum is ${arraySum(numbers)}`)

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let book = {
    title : "To Kill a Mockingbird",
    pages : 281,
    readCount: 3,

    info: function() {
        return `${this.title} with ${this.pages} pages, read ${this.readCount} time(s)`;
    },
};

console.log (book.info());
 
// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

/* function iterate(arr, func) {
    for (let i= 0; i < arr.length; i++) {
        func(arr[i]);
    }
}
 */
let sentence = "The quick brown fox jumps over the lazy dog";

//function to reverse a string
function reverseStr(str) {
    let reversedStr = "";

    for (let i = 0; i < str.length; i++) {
        reversedStr = str[i] + reversedStr;
    }
    return reversedStr;
}

function reverseWordsFromSentence(sentence) {
    let result = "";
    //split into words
    let words = sentence.split(" ");
    //reverse each word
    let reversedWords = words.map(function(word) {
        return reverseStr(word);
    });

    //console.log(words, reversedWords);

    //combine
    return reversedWords.join(" ");
}

console.log(reverseWordsFromSentence(sentence));

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

function toJSON() {
    let dataArr = csvData.split("\n");

    //get headers
    let headers = dataArr[0].split(",");

    //get each record
    let records = dataArr.slice(1); //slices to end of array 

    //console.log(headers, records);

    let json = records.map(function (record) {
        let values = record.split(","); // "Frodo,50" -> ["Frodo", "50"]
        let obj = {};

        // add headers a properties on the obj
        // use the header index to grab the corresponding value at the same index
        headers.forEach(function (header, index) {
        obj[header] = values[index];
    })

    return obj;
  })

  return json;
}

let result = toJSON(csvData);
console.log(result);

