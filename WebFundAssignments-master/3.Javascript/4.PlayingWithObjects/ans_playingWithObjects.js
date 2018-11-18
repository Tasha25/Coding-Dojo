var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];


1. How would you print/log John's age?
console.log(users[1].age)

2. How would you print/log the name of the first object?
console.log(users[0].name)

3. How would you print/log the name and age of each user using a for loop?


var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];


function printNames() {
   for (var index = 0; index < users.length; index++) {
     console.log(users[index].name + " - " + users[index].age);
   }
}
printNames(users);


Your output should look something like this


Michael - 37
John - 30
David - 27
