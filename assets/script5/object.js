const movieList = document.getElementById("movie-list");

movieList.style['backgroundColor'] = "red";
movieList.style.display = "block";

let person = {
  "first name": "Max",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  greet: function () {
    alert("Hi there!");
  },
};

delete person.age;
// person.age = undefined;
// person.age = null

person.isAdmin = true;

console.log(person["first name"]);
