# JS vs. TS

Migrating a project from JavaScript to TypeScript involves several steps and learning some key differences between the two languages. Here are the main differences and concepts you need to understand:

### TypeScript Basics

1. **Static Typing:**
   - TypeScript introduces static types to JavaScript. You'll need to learn how to define types for variables, function parameters, and return values.

   ```typescript
   let count: number = 5;
   const name: string = "John";
   ```

2. **Interfaces:**
   - TypeScript allows you to define interfaces to describe the shape of objects.

   ```typescript
   interface Person {
     name: string;
     age: number;
   }

   const person: Person = {
     name: "Alice",
     age: 25
   };
   ```

3. **Type Annotations:**
   - Type annotations help specify what type a variable or function should be.

   ```typescript
   function greet(name: string): string {
     return `Hello, ${name}`;
   }
   ```

4. **Type Inference:**
   - TypeScript can often infer types based on the context, reducing the need for explicit type annotations.

   ```typescript
   let count = 5; // inferred as number
   ```

5. **Enums:**
   - Enums allow you to define a set of named constants.

   ```typescript
   enum Direction {
     Up,
     Down,
     Left,
     Right
   }
   ```

6. **Tuples:**
   - Tuples are a way to express an array with a fixed number of elements whose types are known.

   ```typescript
   let tuple: [string, number] = ["hello", 10];
   ```

### Advanced TypeScript Features

7. **Generics:**
   - Generics allow you to write reusable and flexible components.

   ```typescript
   function identity<T>(arg: T): T {
     return arg;
   }

   const output = identity<string>("myString");
   ```

8. **Type Aliases:**
   - Type aliases allow you to create a new name for an existing type.

   ```typescript
   type Point = {
     x: number;
     y: number;
   };
   ```

9. **Union and Intersection Types:**
   - Union types allow a variable to be one of several types. Intersection types combine multiple types into one.

   ```typescript
   let value: string | number;
   value = "hello";
   value = 42;

   type Person = { name: string };
   type Employee = Person & { company: string };
   ```

10. **Type Assertions:**
    - Type assertions are a way to tell the compiler to treat a value as a specific type.

    ```typescript
    let someValue: any = "this is a string";
    let strLength: number = (someValue as string).length;
    ```

### Project Configuration

11. **tsconfig.json:**
    - The `tsconfig.json` file is used to configure TypeScript options for your project.

    ```json
    {
      "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true
      }
    }
    ```

12. **TypeScript Compiler:**
    - You'll need to run the TypeScript compiler (`tsc`) to compile TypeScript files into JavaScript.

### Migrating JavaScript to TypeScript

13. **Renaming Files:**
    - Change the extension of your JavaScript files from `.js` to `.ts`.

14. **Adding Types:**
    - Gradually add type annotations to your variables, function parameters, and return values.

15. **Handling Third-Party Libraries:**
    - Install type definitions for third-party libraries using `@types` packages.

    ```bash
    npm install --save-dev @types/lodash
    ```

16. **Using TypeScript with React:**
    - If you're using React, you need to learn how to use TypeScript with JSX/TSX files.

    ```tsx
    import React from 'react';

    interface AppProps {
      message: string;
    }

    const App: React.FC<AppProps> = ({ message }) => <div>{message}</div>;
    ```

### Best Practices

17. **Strict Mode:**
    - Enable strict mode in `tsconfig.json` to enforce best practices and catch potential errors early.

    ```json
    "strict": true
    ```

18. **Linting:**
    - Use a linter like ESLint with TypeScript support to maintain code quality.

    ```bash
    npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
    ```

19. **Type Guards:**
    - Use type guards to ensure variables are of a certain type before performing operations on them.

    ```typescript
    function isString(value: any): value is string {
      return typeof value === 'string';
    }
    ```

20. **Refactoring:**
    - Refactor your code incrementally, starting with adding type annotations and gradually introducing more advanced TypeScript features.

By understanding and implementing these concepts and steps, you'll be able to effectively migrate your JavaScript project to TypeScript and take advantage of its features for improved type safety and development experience.
