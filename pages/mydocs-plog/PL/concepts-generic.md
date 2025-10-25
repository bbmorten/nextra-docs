# Concepts related to programming

##  Dispatch

In programming, **dispatch** refers to the process of selecting which function or method to execute when a program runs. The term is commonly associated with object-oriented programming but is also applicable in other paradigms. There are several types of dispatch, each serving different purposes:

### Types of Dispatch

1. **Static Dispatch** (also known as **Compile-Time Dispatch**):
   - The method or function to be executed is determined at compile time.
   - This type is commonly seen with function overloading in languages like C++ and Java. The compiler decides which function to call based on the type and number of arguments.
   - Example: Method overloading in Java.

2. **Dynamic Dispatch** (also known as **Run-Time Dispatch**):
   - The method to be executed is determined at runtime based on the actual object type.
   - It is typically used in object-oriented languages that support inheritance and polymorphism.
   - Example: Method overriding in Java, where the overridden method in the derived class is called based on the runtime type of the object.

3. **Single Dispatch**:
   - A function or method is chosen based on the type of a single object.
   - Most object-oriented programming languages use single dispatch by default.

4. **Multiple Dispatch**:
   - A function or method is chosen based on the runtime types of more than one of its arguments.
   - Some languages, like Common Lisp and Julia, support multiple dispatch, allowing a more flexible and powerful form of polymorphism.

5. **Message Dispatch**:
   - In some languages, like Smalltalk, sending a message to an object is a form of dispatch. The object determines which method to call in response to the message.

6. **Dynamic Method Dispatch**:
   - A core concept in languages like Java and Python where methods that are overridden by subclasses are invoked by the object instance, allowing for polymorphism.

### Real-World Example

In JavaScript, dispatch is often seen in event handling:

```javascript
document.getElementById("myButton").addEventListener("click", () => {
  console.log("Button clicked!");
});
```

When a user clicks the button, the event handler is dispatched, and the corresponding function is executed.

### In Summary

Dispatch is a core concept in programming, allowing flexibility and reusability of code by dynamically determining which function or method should execute based on different criteria such as type, context, or event.

Would you like more detailed examples or a specific focus on any type of dispatch?
