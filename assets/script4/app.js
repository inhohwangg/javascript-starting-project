// const numbers = [1, 2, 3];
// console.log(numbers);

// // const moreNumbers = Array(5, 2);
// // console.log(moreNumbers);

// // const yetMoreNumber = Array.of(1, 2);
// // console.log(yetMoreNumber);

// const listItems = document.querySelectorAll("li");
// console.log(listItems);

// const moreNumbers = Array.from(listItems);
// console.log(moreNumbers);

// const hobbies = ["Cooking", "Sports"];
// const personalData = [30, "Max", { moreDetail: [] }];

// const analyticsData = [
//   [1, 1.6],
//   [-5.4, 2.1],
// ];

// for (const data of analyticsData) {
//   for (const dataPoint of data) {
//     console.log(dataPoint);
//   }
// }

// console.log(personalData[1])

const hobbies = ["Sports", "Cooking"];
hobbies.push("Reading");
console.log(hobbies);
hobbies.unshift("Coding");
const poppedValue = hobbies.pop();
hobbies.shift();
console.log(hobbies);

hobbies[1] = "Coding";
// hobbies[5] = "Reading";
console.log(hobbies, hobbies[4]);

hobbies.splice(1, 0, 'Good Food')
console.log(hobbies)

const removedElements =  hobbies.splice(-2, 1)
console.log(hobbies)