// // const numbers = [1, 2, 3];
// // console.log(numbers);

// // // const moreNumbers = Array(5, 2);
// // // console.log(moreNumbers);

// // // const yetMoreNumber = Array.of(1, 2);
// // // console.log(yetMoreNumber);

// // const listItems = document.querySelectorAll("li");
// // console.log(listItems);

// // const moreNumbers = Array.from(listItems);
// // console.log(moreNumbers);

// // const hobbies = ["Cooking", "Sports"];
// // const personalData = [30, "Max", { moreDetail: [] }];

// // const analyticsData = [
// //   [1, 1.6],
// //   [-5.4, 2.1],
// // ];

// // for (const data of analyticsData) {
// //   for (const dataPoint of data) {
// //     console.log(dataPoint);
// //   }
// // }

// // console.log(personalData[1])

// // const hobbies = ["Sports", "Cooking"];
// // hobbies.push("Reading");
// // console.log(hobbies);
// // hobbies.unshift("Coding");
// // const poppedValue = hobbies.pop();
// // hobbies.shift();
// // console.log(hobbies);

// // hobbies[1] = "Coding";
// // // hobbies[5] = "Reading";
// // console.log(hobbies, hobbies[4]);

// // hobbies.splice(1, 0, 'Good Food')
// // console.log(hobbies)

// // const removedElements =  hobbies.splice(-2, 1)
// // console.log(hobbies)

// const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
// // const storeResult = testResults.slice(2);
// const storeResult = testResults.concat([3.99, 2]);

// testResults.push(5.91);

// console.log(storeResult, testResults);
// console.log(testResults.indexOf(1.5));

// console.log(testResults.includes(10.99))

// const personData = [{ name: "Max" }, { name: "Manuel" }];
// console.log(personData.indexOf({ name: "Manuel" }));

// const manuel = personData.find((person, idx, persons) => {
//   return person.name === "Manuel";
// });

// manuel.name = "Anna";

// console.log(manuel, personData);

// const maxIndex = personData.findIndex((person, idx, persons) => {
//   return person.name === "Max";
// });

// console.log(maxIndex);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// // for (const price of prices) {
// //   taxAdjustedPrices.push(price * (1 + tax));
// // }

// prices.forEach((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//   taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

const taxAdjustedPrices = prices.map((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
  return priceObj;
});

// console.log(prices, taxAdjustedPrices);

const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return;
    -11;
  } else if (a === b) {
    return 0;
  } else {
    return 1;
  }
});
// console.log(sortedPrices.reverse());
console.log(sortedPrices);

const filteredArray = prices.filter((price, idx, prices) => {
  return price > 6;
});

console.log(filteredArray);

// let sum = 0;

// prices.forEach((price)=> {
//     sum += price
// })

// console.log(sum)

const sum = prices.reduce((prevValue, curValue, curIndex, prices) => {
  return prevValue + curValue;
}, 0);

const sumTest = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);

console.log(sum);
console.log(sumTest)

// 방법 1
const orignalArray = [{price:10.99}, {price:5.99}, {price:29.99}]
const transformedArray = orignalArray.map((obj)=>obj.price)
const test = transformedArray.reduce((prevValue, curValue)=> prevValue + curValue, 0)
console.log(transformedArray)
console.log(test)

// 방법 2
const orignalArray1 = [{price:10.99}, {price:5.99}, {price:29.99}]
const sum1 = orignalArray1.reduce((sumVal, curVal)=>sumVal+curVal.price, 0)
console.log(sum1)

// 방법 3
const orignalArray2 = [{price:10.99}, {price:5.99}, {price:29.99}]
const sum2 = orignalArray2.map((obj)=>obj.price).reduce((prevValue, curValue)=> prevValue+curValue, 0)
console.log(sum2)