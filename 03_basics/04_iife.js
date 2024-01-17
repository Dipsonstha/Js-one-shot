//Immidietaly Invoked Function Expressions(IIFE)

/*syntax
First() for function declaration and second() is for execution call
()()
*/
/*
Why to use ?
//to avoid global scope variable pollution
1. To avoid polluting the global namespace by creating unnecessary variables.
2. It allows us to create a scope that restricts access to certain variables, which can help
prevent conflicts with other scripts or functions in your codebase.
3. Allows you to organize your code into manageable sections using closures.
4. Can be used as a way to encapsulate data and behavior together within a single unit
called a module. This makes it easier to maintain large applications because each
module can be developed independently of others.
5. Provides privacy and security by hiding implementation details from the outside world.
Only expose what’s necessary through public interface (functions).
6. Makes testing easier since everything is contained within one function.
7. Helps prevent naming collisions when multiple developers work on the same project.
8. Enhances code readability and maintainability.
9. Improves performance by reducing the exposure of variables to the global scope.
*/
/*Normal function expression
function hello() {
  console.log("hello world");
}
hello();
*/
//IIFE example
//named IIFE
(function hello() {
  console.log("hello world");
})(); /*NOTE:***Importan to use ; to end the IIFE function if not used then error occurs*****/

//unamed IIFE or simple IIFE
(() => {
  console.log(`Chai or Code`);
})();

//IIFE with parameter and arguments
((name) => {
  console.log(`Chai or ${name}`);
})("Bread");
