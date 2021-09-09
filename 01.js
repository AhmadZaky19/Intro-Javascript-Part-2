// 01.length = untuk menghitung panjang string
let str = "football";
let length = str.length;

console.log(length);

// 02. replace = untuk mengganti string dengan string yang baru
let string = "Visit Arkademy";
let newString = string.replace("Visit", "Bootcamp");

console.log(newString);

// 03. toLowerCase() = untuk mengubah huruf besar ke huruf kecil pada string
let upCase = "HELLO WORLD!";
let lowCase = upCase.toLowerCase();

console.log(lowCase);

// 04. toUpperCase() = untuk mengubah huruf kecil ke huruf besar pada string
let caseLow = "hello world!";
let caseUp = caseLow.toUpperCase();

console.log(caseUp);

// 05. filter() = untuk menyaring elemen dari sebuah array
const allScore = [50, 67, 31, 70, 66, 80, 53, 40, 65, 100];
function passCheck(score) {
  return score >= 65;
}

console.log(allScore.filter(passCheck));

// 06. push () = untuk menambah satu atau lebih elemen ke akhir sebuah array
let sports = ["sepak bola", "badminton"];
sports.push("bola basket", "renang");

console.log(sports);

// 07. pop() = untuk menghapus elemen terakhir dari sebuah array
let genre = ["Action", "Romance", "Thriller", "Horror"];
let poppedItem = genre.pop();

console.log(poppedItem);
console.log(genre);

// 08. shift() = untuk menghapus elemen pertama dari sebuah array
let color = ["Red", "Blue", "Green", "Purple", "Yellow"];
let shiftedItem = color.shift();

console.log(shiftedItem);
console.log(color);

// 09. unshift() = untuk menambah satu atau lebih elemen ke awal sebuah array
let nations = ["Indonesia", "Germany", "Italy"];
nations.unshift("Japan");

console.log(nations);

// 10. sort() = untuk mengurutkan sebuah array
const number = [16, 2, 24, 23, 19, 4, 79, 56, 10, 17, 11];
number.sort(function(a, b){return a - b});

console.log(number);
