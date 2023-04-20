// Arrays are mutable in JS!?!

// Declare an array called customerNames
let customerNames = [];
customerNames.push("Bob Loblaw");
customerNames.push("Buster Bluth");

// Can print by individual element index (position in array)
console.log(customerNames[0]);

// Or print all elements in array using a for loop i = index
for (let i = 0; i < customerNames.length; i++) {
  console.log(customerNames[i]);
}

// Enhanced for loop
for (let customerName of customerNames) {
  // <-- So the 'of' keyword is cruicial here. Don't forget that 'of'.
  console.log(customerName); // Week 3 Arrays 1st arrays video
}
