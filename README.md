# Type Error in TypeScript: String Array vs. String

This repository demonstrates a common type error in TypeScript: passing an array of strings to a function expecting a single string. The `greeter` function is designed to accept a single string as input. However, the `user` variable is an array of strings which results in a type error.

The solution shows how to properly handle the array, either by iterating over it or selecting a specific element to pass to the `greeter` function.