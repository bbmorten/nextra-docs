# Concepts

##  Data Structures in Javascript

###  Map

In JavaScript, a `Map` is a collection of keyed data items, just like an Object. However, it offers some significant advantages over an Object when it comes to storing collections of data. Here are some of the key features of a Map:

1. **Keys can be of any type**: Unlike Objects, which only support String and Symbol as keys, Maps allow keys of any type, including functions, objects, and any primitive type.

2. **Order of elements**: The elements in a Map are ordered in the insertion order. This means when iterating over a Map, the elements will be returned in the order they were added, which is not the case with regular Objects.

3. **Size property**: A Map has a `size` property that returns the number of elements in the Map, making it easy to get the size without having to manually count the elements as you would with an Object.

4. **Better performance**: For large sets of data, Maps have better performance in scenarios involving frequent addition and removal of key-value pairs.

5. **Utility methods**: Maps come with several built-in methods to manipulate the data, including:
   - `set(key, value)`: Adds or updates an element with a specified key and value.
   - `get(key)`: Returns the value associated with a specified key, or `undefined` if the key doesn't exist.
   - `has(key)`: Returns a Boolean indicating whether an element with the specified key exists.
   - `delete(key)`: Removes the element associated with the specified key. Returns true if the element existed and has been removed, or false if the element does not exist.
   - `clear()`: Removes all elements from the Map.
   - `forEach(callback)`: Executes a provided function once per each key-value pair in the Map, in insertion order.

Maps are particularly useful when you need a collection that requires keys of any type, when you need to maintain the insertion order of elements, or when you're dealing with a large number of elements and performance is a concern.

##  Template Literals

Using backticks (`` `), in JavaScript is called a *template literal*. Template literals allow for embedded expressions, which can be used to incorporate variables and expressions into strings. The`${ ... }` syntax is used to insert the value of a variable or to evaluate an expression within the template literal. In your example, `console.log(`${i} *${j} = ${i* j}`);` uses a template literal to construct a string that includes the values of `i`, `j`, and the result of `i * j`, making the code more readable and easier to write compared to traditional string concatenation.

##  Literals

In programming, a literal is a notation for representing a fixed value in source code. Literals are directly written in the code without requiring computation or derivation. They are the raw values themselves, embedded in the code, and serve as a way to express constants. The type of a literal is determined by its syntax and the value it represents. Common types of literals include:

1. **Numeric Literals**: Represent numeric values (integers or floating-point numbers). Examples include `123`, `3.14`, and `-500`.

2. **String Literals**: Represent sequences of characters and are usually enclosed in quotes. Examples include `"hello"`, `'world'`, and `"1234"`.

3. **Boolean Literals**: Represent truth values and can be either `true` or `false`.

4. **Null Literal**: Represents the null value, which is often used to indicate the intentional absence of any object value. In JavaScript, for example, it is written as `null`.

5. **Array Literals**: Represent arrays and are enclosed in square brackets. Elements within the array are separated by commas. Example: `[1, 2, 3]` or `["apple", "banana", "cherry"]`.

6. **Object Literals**: Represent objects and are enclosed in curly braces. Properties and their values are defined within the braces, separated by commas. An example in JavaScript would be `{name: "John", age: 30}`.

7. **RegExp Literals**: Represent regular expressions and are used for pattern matching or pattern replacement. They are enclosed between slashes. Example: `/abc/`.

Literals provide a way to define values in a clear and concise manner, making source code easier to read and understand. They are fundamental to programming, as they allow developers to specify values that remain constant throughout the execution of a program.

###  Object Literals

An object literal is a notation or syntax in programming languages, particularly in JavaScript, for defining an object. It allows you to create a new object without having to define a class before instantiating it. This is done by enclosing a comma-separated list of name-value pairs within curly braces `{}`.

Here’s the basic structure of an object literal in JavaScript:

```javascript
let myObject = {
  propertyName1: value1,
  propertyName2: value2,
  // ...
};
```

- **propertyName1**, **propertyName2**, ... are the keys or names of the properties of the object.
- **value1**, **value2**, ... are the values assigned to those properties.

Object literals can include properties and methods. Properties are defined as key-value pairs, and methods are functions associated with an object.

Here's an example of an object literal that includes both properties and a method:

```javascript
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  greet: function() {
    console.log("Hello, my name is " + this.firstName + " " + this.lastName + ".");
  }
};

// Accessing properties
console.log(person.firstName); // Outputs: John

// Calling a method
person.greet(); // Outputs: Hello, my name is John Doe.
```

Object literals are a powerful and convenient feature in JavaScript for quickly creating objects with properties and methods.

##  Vanilla JavaScript

Vanilla JavaScript refers to plain or pure JavaScript without any libraries or frameworks. It means using the JavaScript language as it is, leveraging its native APIs and capabilities to build web applications and functionalities. The term "vanilla" is used to emphasize the use of JavaScript in its original form, distinguishing it from the use of additional tools like jQuery, React, Angular, or Vue.js.

The advantage of using vanilla JavaScript is that it helps developers understand the core of the language, improves performance (since there are no additional library or framework overheads), and ensures better compatibility across different web browsers without relying on external dependencies.

With the evolution of JavaScript and the development of new features in ECMAScript standards, vanilla JavaScript has become more powerful, allowing developers to implement complex functionalities that were previously only possible with libraries or frameworks. This includes tasks like DOM manipulation, event handling, AJAX requests, and animations.

Learning and using vanilla JavaScript is considered essential for a strong foundation in web development, as it provides a deeper understanding of how JavaScript works under the hood, making it easier to pick up and use JavaScript frameworks and libraries effectively.

##  What is ECMAScript?

ECMAScript is a standard for scripting languages, such as JavaScript, JScript, and ActionScript. It specifies the core principles, syntax, semantics, and libraries of the language. The European Computer Manufacturers Association (ECMA) International, an organization dedicated to the standardization of information and communication systems, is responsible for managing and updating the ECMAScript standard, which is officially designated as ECMA-262.

The development of ECMAScript began in the mid-1990s, with the goal of standardizing JavaScript to ensure its consistency across different web browsers and platforms. The first edition of ECMAScript was released in 1997. Since then, the standard has undergone several updates to introduce new features, improve performance, and enhance the language's capabilities to meet modern development needs.

Some of the significant milestones in ECMAScript's evolution include:

- **ECMAScript 3 (1999):** Introduced regular expressions, try/catch error handling, and more.
- **ECMAScript 5 (2009):** Added "strict mode," JSON support, and enhanced array manipulation methods.
- **ECMAScript 2015 (6th edition):** A major update that introduced classes, modules, template literals, arrow functions, promises, and many other features that significantly changed how JavaScript is written.
- **ECMAScript 2016 and beyond:** These updates introduced features like async/await, the spread operator, rest parameters, and new data structures like `Map` and `Set`. The process also shifted towards yearly updates to ensure the gradual and consistent evolution of the language.

ECMAScript serves as the foundation for JavaScript implementation in browsers and other environments, ensuring interoperability and paving the way for the development of complex web applications. By adhering to the ECMAScript standard, JavaScript engines like V8 (Chrome), SpiderMonkey (Firefox), and JavaScriptCore (Safari) can execute code consistently across different platforms.

##  Stack vs Heap

The stack and the heap are two fundamental structures used in computer memory management, each serving different purposes and managed in distinct ways. Understanding the differences between them is crucial for effective programming and optimization. Here's a simplified breakdown:

### Stack

1. **Memory Allocation**: The stack is used for static memory allocation, which includes function call stacks and local variables. Memory allocation and deallocation on the stack are done in a last-in, first-out (LIFO) manner, making it very efficient.

2. **Lifetime**: Variables stored on the stack have their lifetime tied to the scope in which they are declared. When a function exits, all its stack-allocated memory is automatically freed, which means you don't manually manage this memory.

3. **Size**: The size of the stack is fixed and decided at the start of the program. The stack's limited size means it can run out of space, leading to a stack overflow error if it's overly consumed (e.g., by deep or infinite recursion).

4. **Access Speed**: Accessing stack memory is fast because of its LIFO nature and how closely it's managed by the CPU.

5. **Use Cases**: Ideal for temporary storage when you know exactly how much memory you need at compile time, and for variables that do not need to be shared across different parts of the program.

### Heap

1. **Memory Allocation**: The heap is used for dynamic memory allocation, where the size of the memory needed is not known at compile time and can change at runtime. Objects are allocated and freed manually by the programmer (or automatically, with garbage collection in languages like JavaScript).

2. **Lifetime**: The lifetime of heap-allocated memory is not managed automatically; it remains allocated until it's explicitly freed or the program ends. This flexibility comes with the responsibility of managing memory (allocating and freeing it) correctly to avoid leaks.

3. **Size**: The heap can typically grow much larger than the stack, limited only by the size of virtual memory and the physical memory available. This makes it suitable for allocating large amounts of memory.

4. **Access Speed**: Accessing heap memory can be slower than stack memory due to the overhead of managing memory (e.g., finding a block of free memory), and because data might be scattered throughout the heap, leading to cache misses.

5. **Use Cases**: Suitable for allocating memory that needs to be shared across different parts of the program or for variables whose size might change at runtime, such as dynamic arrays or objects.

### Summary

- **Stack**: Fast, automatically managed memory for temporary, scope-bound variables.
- **Heap**: Flexible, manually managed memory for dynamic or large allocations, shared resources, or variables with lifetimes decoupled from scope.

Properly managing stack and heap memory is crucial for writing efficient, effective code, especially in languages where memory management is manual, like C and C++. In higher-level languages like Python, JavaScript, or Java, the runtime environment abstracts much of this complexity away, handling memory allocation and garbage collection on the developer's behalf.

##  Can you store an object on the stack in JS?

In JavaScript, the distinction between stack and heap memory management is abstracted away from the developer, unlike in lower-level languages like C or C++. JavaScript automatically manages memory allocation, scope, and garbage collection, making direct control over memory (such as explicitly placing objects on the stack or heap) not part of the language's developer-facing features.

### How JavaScript Manages Memory

- **Primitive Types**: In JavaScript, primitive types (such as numbers, strings, booleans, null, undefined, symbols, and BigInts) are typically stored on the stack. These are values that have a fixed size and are directly stored in the location the variable accesses.

- **Objects and Functions**: When it comes to objects (including arrays, functions, and other non-primitive types), what's stored on the stack is a reference to these objects, while the objects themselves are stored on the heap. This is because objects can grow in size and are not of a fixed size at compile time. The references to these heap-allocated objects are handled by the JavaScript runtime environment and are not something developers control directly.

### The Conceptual Model

When a function is called in JavaScript, a new frame is pushed onto the call stack (which manages function calls). Within this frame, all the local variables (including references to objects) are stored. The actual objects, however, live in the heap space, a larger memory area suited for dynamic allocation. When the function execution completes, the frame is popped off the stack, but the objects themselves remain in the heap until they are no longer referenced anywhere in the code. At this point, garbage collection can reclaim their memory.

### Direct Answer

So, can you store an object directly on the stack in JavaScript? Not explicitly. JavaScript's memory management model abstracts these details away, focusing on ease of use and safety over direct memory manipulation. Objects are dynamically allocated in the heap, and what you manipulate in your code are references to these objects, even though under the hood, the JavaScript engine might optimize certain cases for performance reasons, this is not directly controllable by or visible to JavaScript developers.

##  Prototypes

In JavaScript, every object has a "prototype." The prototype is essentially an object from which another object inherits properties and methods. When you hear about the "prototype of the String object," it's referring to the prototype property of the String constructor function, which is used as a blueprint for creating new String objects and provides inherited properties and methods for string manipulation.

### The Prototype Chain

When you create a string in JavaScript, either by using a string literal or by explicitly creating a new instance of the String object, the resulting string inherits properties and methods from the String prototype. This mechanism is part of what's known as the prototype chain: when you try to access a property or method on an object, JavaScript first looks at the object itself, and if it doesn't find it there, it looks at the object's prototype, and so on up the chain until it reaches the top level, which is `Object.prototype`.

### Properties and Methods of the String Prototype

The String prototype (`String.prototype`) includes a wide variety of methods for string manipulation, such as `toLowerCase()`, `toUpperCase()`, `charAt()`, `indexOf()`, `substring()`, and many others. These methods are available to all string instances. For example:

```javascript
let myString = "Hello, World!";
console.log(myString.toLowerCase()); // Outputs: "hello, world!"
```

In this example, `"Hello, World!"` is a string instance that inherits the `toLowerCase` method from `String.prototype`, allowing you to convert the entire string to lowercase letters.

### Customizing the Prototype

While it's not common practice and generally discouraged for built-in objects due to potential conflicts and maintenance issues, JavaScript allows you to add your own properties or methods to existing prototypes, including `String.prototype`. This means you can extend the functionality of all string instances in your application if necessary:

```javascript
String.prototype.sayHello = function() {
    return `Hello, ${this}!`;
};

console.log("World".sayHello()); // Outputs: "Hello, World!"
```

This code snippet adds a `sayHello` method to the `String.prototype`, making it available to all string instances.

### Conclusion

The prototype of the String object is a central feature of JavaScript's prototype-based inheritance. It allows all string instances to share a set of properties and methods, enabling efficient memory usage and providing a rich toolkit for string manipulation directly on any string instance.

![alt text](images/xxx.png) <!-- image not found -->
