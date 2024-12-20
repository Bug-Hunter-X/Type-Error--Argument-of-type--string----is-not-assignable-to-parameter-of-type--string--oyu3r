function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane Doe", "John Smith"];

// Solution 1: Iterate over the array
user.forEach(name => {
  console.log(greeter(name));
});

// Solution 2: Access a specific element
console.log(greeter(user[0]));