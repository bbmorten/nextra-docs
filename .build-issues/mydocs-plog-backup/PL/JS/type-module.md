#  `<script ... type="module">`

The `type="module"` attribute in the `<script>` tag is used to denote that the script is a JavaScript module. Modules are a way to structure JavaScript code in a more maintainable and reusable manner. They allow you to import and export functionality between different files, enabling better code organization and scope management.

### Key Features of `type="module"`

1. **Scoped Variables:**
   - Variables declared inside a module are scoped to that module and are not added to the global scope.

2. **Import and Export:**
   - Modules can export functions, objects, or values using the `export` keyword and import them into other modules using the `import` keyword.

   ```javascript
   // math.js
   export function add(x, y) {
     return x + y;
   }

   // main.js
   import { add } from './math.js';
   console.log(add(2, 3)); // Outputs: 5
   ```

3. **Automatic Strict Mode:**
   - Modules always run in strict mode, even if you do not include `"use strict";` at the beginning of the file.

4. **Deferred Execution:**
   - Modules are deferred by default. This means they are executed after the HTML document is fully parsed, similar to scripts with the `defer` attribute.

5. **No Top-Level `this`:**
   - In modules, the top-level `this` is `undefined`, unlike in non-module scripts where it refers to the global object.

6. **Module Specifiers:**
   - Module specifiers (paths in `import` statements) are always interpreted as relative or absolute URLs. This means you need to use a proper path (e.g., `./module.js` or `/module.js`).

### Example Usage in HTML

Here's an example of how you might use `type="module"` in an HTML file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Modules</title>
</head>
<body>
  <script type="module">
    import { add } from './math.js';
    console.log(add(2, 3)); // Outputs: 5
  </script>
</body>
</html>
```

### Important Considerations

1. **File Extensions:**
   - When importing modules, you must include the file extension (`.js`) in the import statement.

2. **CORS:**
   - Modules are subject to the same-origin policy and Cross-Origin Resource Sharing (CORS) restrictions. This means that the module files must be served from the same origin or explicitly allowed via CORS headers.

3. **No Inline Imports:**
   - The `import` statement can only be used at the top level and cannot be used conditionally or inside functions.

4. **Browser Support:**
   - Most modern browsers support ES modules. Ensure that your target audience uses browsers that support modules, or provide a fallback for older browsers.

### Example Project Structure

Consider the following project structure:

```
/project
  |-- index.html
  |-- main.js
  |-- math.js
```

**index.html:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Modules Example</title>
</head>
<body>
  <script type="module" src="main.js"></script>
</body>
</html>
```

**main.js:**

```javascript
import { add } from './math.js';
console.log(add(2, 3)); // Outputs: 5
```

**math.js:**

```javascript
export function add(x, y) {
  return x + y;
}
```

Using `type="module"` makes it easy to build modular, maintainable JavaScript applications, taking advantage of the modern features provided by ES modules.
