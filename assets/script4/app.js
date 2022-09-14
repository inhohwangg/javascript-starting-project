const numbers = [1, 2, 3];
console.log(numbers);

// const moreNumbers = Array(5, 2);
// console.log(moreNumbers);

// const yetMoreNumber = Array.of(1, 2);
// console.log(yetMoreNumber);

const listItems = document.querySelectorAll("li");
console.log(listItems);

const moreNumbers = Array.from(listItems);
console.log(moreNumbers);
