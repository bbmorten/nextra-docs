#  Chapter 14-22

## Errata

- Day 25 - 20240521
- Day 26 - 20240523
- Day 27 - 20240528
- Day 28 - 20240529
- Day 29 - 20240603

<!-- 20240521 -->

##  14 oop-constructors-prototypes

###  01-object-literals-this

```javascript
const rectangle = {
  name: 'Rectangle 1',
  width: 20,
  height: 10,
  // We can add methods to an object and use this keyword to access the properties of the object
  area: function () {
    return this.width * this.height;
  },
};

// Object literals are great for creating objects that only need one instance. If we needed two Rectangles, we would have to create two objects

const rectangle2 = {
  name: 'Rectangle 2',
  width: 30,
  height: 20,
  area: function () {
    return this.width * this.height;
  },
};

console.log(rectangle.area());
console.log(rectangle2.area());

```

###  02-constructor-functions

```javascript
// Constructor Function
function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.height * this.width;
  };
}

// We can create as many instances of our Rectangle objects as we want using the `new` keyword
const rect1 = new Rectangle('Rectangle 1', 10, 10);
console.log(rect1.name);
console.log(rect1.area());

const rect2 = new Rectangle('Rectangle 2', 20, 10);
const rect3 = new Rectangle('Rectangle 3', 30, 30);

console.log(rect2.name, rect3.name);
console.log(rect2.area(), rect3.area());

// When we use the `new` keyword, 4 things happen:
// 1. A new empty object is created.
// 2. The constructor function is called with the arguments that we passed in.
// 3. The `this` keyword is set to the new empty object.
// 4. The new object is returned from the constructor function.

// We can access the constructor function with the `constructor` property
console.log(rect1.constructor);

// Check to see if an object is an instance of a constructor
console.log(rect2 instanceof Rectangle);

```

###  03-literals-vs-constructors

```javascript
const strLit = 'Hello';
const strObj = new String('Hello');

console.log(strLit, typeof strLit);
console.log(strObj, typeof strObj);

// Boxing
console.log(strLit.toUpperCase());
// Even though the strLit variable is a string literal for a primitive type, it can still use the toUpperCase() method because the string literal is converted to a String object behind the scenes. This is called boxing.
console.log(strLit[0]);

// Unboxing
console.log(strObj.valueOf(), typeof strObj.valueOf());

console.log(strLit.constructor);
console.log(strObj.constructor);

// The instanceof operator returns true if an object is an instance of a constructor. It returns false if it is a literal.
console.log(strLit instanceof String);
console.log(strObj instanceof String);

// Other types
const numLit = 20;
const numObj = new Number(20);

console.log(numLit, typeof numLit);
console.log(numObj, typeof numObj);

const boolLit = true;
const boolObj = new Boolean(true);

console.log(boolLit, typeof boolLit);
console.log(boolObj, typeof boolObj);

const arrLit = [1, 2, 3, 4, 5];
const arrObj = new Array(1, 2, 3, 4, 5);

console.log(arrLit, typeof arrLit);
console.log(arrObj, typeof arrObj);

const funcLit = function (x) {
  return x * x;
};

console.log(funcLit, typeof funcLit);

console.log(funcLit(5));

const funcObj = new Function('x', 'return x * x');

// We can execute the function created with the Function constructor
console.log(funcObj(3));

const obj1 = {};
const obj2 = new Object(); // Behind the scenes, JS does this for the previous line as well

console.log(obj1, typeof obj1);
console.log(obj2, typeof obj2);

```

### 04-object-properties

```javascript
function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
}

const rect1 = new Rectangle('Rectangle 1', 20, 20);
const rect2 = new Rectangle('Rectangle 2', 20, 30);

console.log(rect1.name, rect2.width);
console.log(rect1['width']);

// Add property
rect1.color = 'red';

rect2.perimeter = () => 2 * (rect2.width + rect2.height);

// Delete property
delete rect2.perimeter;

// Check for property
console.log(rect2.hasOwnProperty('color'));
console.log(rect1.hasOwnProperty('color'));

// Get keys
console.log(Object.keys(rect1));

// Get values
console.log(Object.values(rect2));

// Get entries
console.log(Object.entries(rect1));

for (let [key, value] of Object.entries(rect1)) {
  if (typeof value !== 'function') {
    console.log(`${key} - ${value}`);
  }
}

```

### 05-prototypes

```javascript
function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
}

const rect = new Rectangle('Rect', 10, 10);

//  Rectangle.prototype inherits from Object.prototype. That's why we can use toString(), etc
console.log(rect.toString());

// To get the prototype of an object
console.log(Object.getPrototypeOf(rect));

```

###  06-add-prototype-methods

```javascript
function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
}

Rectangle.prototype.area = function () {
  return this.width * this.height;
};

Rectangle.prototype.perimeter = function () {
  return 2 * (this.width + this.height);
};

Rectangle.prototype.isSquare = function () {
  return this.width === this.height;
};

Rectangle.prototype.changeName = function (newName) {
  return (this.name = newName);
};

const rect = new Rectangle('Rect', 10, 20);
const rect2 = new Rectangle('Rect 2', 30, 40);

console.log(rect);
console.log(rect.area());
console.log(rect.perimeter());
console.log(rect.isSquare());
rect.changeName('Test');
console.log(rect.name);

console.log(rect2.area());

```

###  07-object-create

```javascript
const rectanglePrototypes = {
  area: function () {
    return this.width * this.height;
  },
  perimeter: function () {
    return 2 * (this.width + this.height);
  },
  isSquare: function () {
    return this.height === this.width;
  },
};

function createRectangle(height, width) {
  return Object.create(rectanglePrototypes, {
    height: {
      value: height,
    },
    width: {
      value: width,
    },
  });
}

const rect = createRectangle(10, 20);
console.log(rect);
console.log(rect.area());
console.log(rect.isSquare());

const rect2 = createRectangle(20, 20);
console.log(rect2.area());

```

###  08-prototypical-inheritance-call

```javascript
function Shape(name) {
  this.name = name;
}

Shape.prototype.logName = function () {
  console.log(`Shape Name: ${this.name}`);
};

function Rectangle(name, height, width) {
  Shape.call(this, name);

  this.height = height;
  this.width = width;
}

// Inherits Shape prototypes
Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.logName = function () {
  console.log(`Rectangle Name: ${this.name}`);
};

function Circle(name, radius) {
  Shape.call(this, name);

  this.radius = radius;
}

// Inherits Shape prototypes
Circle.prototype = Object.create(Shape.prototype);

// Set prototype constructors
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.constructor = Rectangle;

const rect = new Rectangle('Rectangle 1', 20, 20);
const cir = new Circle('Circle 1', 30);

// console.log(rect, cir);

rect.logName();
cir.logName();

```

###  09-OOP Challenge 1 Solution

```javascript
const Player = function (name) {
  this.name = name;
  this.lvl = 1;
  this.points = 0;
};

Player.prototype.gainXp = function (number) {
  this.points += number;
  if (this.points >= 10) {
    this.lvl++;
    this.points -= 10;
    console.log(`${this.name} is now level ${this.lvl}.`);
  }
  console.log(`${this.name} gained ${number} points.`);
};

Player.prototype.describe = function () {
  console.log(
    `${this.name} is level ${this.lvl} and has ${this.points} points.`
  );
};

const player1 = new Player('John');
const player2 = new Player('Jane');
player1.gainXp(7);
player2.gainXp(18);
player1.gainXp(9);
player2.gainXp(8);

player1.describe();
player2.describe();

```

##  15 classes

###  14-oop-classes-private-properties

```javascript
class Rectangle {
  constructor(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
  }

  area() {
    return this.height * this.width;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }

  isSquare() {
    return this.width === this.height;
  }

  logArea() {
    console.log('Rectangle Area: ' + this.area());
  }
}

const square = new Rectangle('Square', 20, 20);
console.log(square.area());
console.log(square.perimeter());
console.log(square.isSquare());
square.logArea();
console.log(square);
// console.log(Object.getPrototypeOf(square));

```

###  02-class-inheritance

```javascript
// Parent class
class Shape {
  constructor(name) {
    this.name = name;
  }

  logName() {
    console.log('Shape Name: ' + this.name);
  }
}

// Rectangle - Sub class
class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name);

    this.width = width;
    this.height = height;
  }
}

// Circle - Sub class
class Circle extends Shape {
  constructor(name, radius) {
    super(name);

    this.radius = radius;
  }

  // We can override the Shape logName() (polymorphism)
  logName() {
    console.log('Circle Name: ' + this.name);
  }
}

const rect = new Rectangle('Rect 1', 20, 20);
console.log(rect);
rect.logName();

const cir = new Circle('Cir 1', 30);
cir.logName();

// rect is an instance of both Rectangle and Shape
console.log(rect instanceof Rectangle);
console.log(rect instanceof Shape);

```

###  03-static-methods

```javascript
class Rectangle {
  constructor(name, height, width) {
    this.name = name;
    this.height = height;
    this.width = width;
  }

  area() {
    return this.height * this.width;
  }

  static getClass() {
    return 'Rectangle';
  }
}

const rect = new Rectangle('Rect', 10, 10);
console.log(rect.area());
console.log(Rectangle.getClass());

```

###  04-bind-this

```javascript
class App {
  constructor() {
    this.serverName = 'localhost';

    document
      .querySelector('button')
      .addEventListener('click', this.getServerName.bind(this));
  }

  getServerName() {
    console.log(this);
  }
}

const app = new App();

```

###  05-getters-setters-classes

```javascript
class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get firstName() {
    return this.capitalizeFirst(this._firstName);
  }

  set firstName(value) {
    this._firstName = this.capitalizeFirst(value);
  }

  get lastName() {
    return this.capitalizeFirst(this._lastName);
  }

  set lastName(value) {
    this._lastName = this.capitalizeFirst(value);
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  capitalizeFirst(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}

const person1 = new Person('john', 'doe');
console.log(person1.firstName);
console.log(person1.lastName);

person1.firstName = 'joe';
person1.lastName = 'smith';
console.log(person1.fullName);
console.log(person1);

```

###  06-getters-setters-defineproperty

```javascript
// Constructor Function
function Person(firstName, lastName) {
  this._firstName = firstName;
  this._lastName = lastName;

  Object.defineProperty(this, 'firstName', {
    get: function () {
      return this.capitalizeFirst(this._firstName);
    },
    set: function (value) {
      this._firstName = value;
    },
  });

  Object.defineProperty(this, 'lastName', {
    get: function () {
      return this.capitalizeFirst(this._lastName);
    },
    set: function (value) {
      this._lastName = value;
    },
  });

  Object.defineProperty(this, 'fullName', {
    get: function () {
      return this.firstName + ' ' + this.lastName;
    },
  });
}

Person.prototype.capitalizeFirst = function (value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

// Object Literal
const PersonObj = {
  _firstName: 'jane',
  _lastName: 'doe',

  get firstName() {
    return Person.prototype.capitalizeFirst(this._firstName);
  },

  set firstName(value) {
    this._firstName = value;
  },

  get lastName() {
    return Person.prototype.capitalizeFirst(this._lastName);
  },

  set lastName(value) {
    this._lastName = value;
  },

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  },
};

const person1 = new Person('john', 'doe');
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.fullName);

const person2 = Object.create(PersonObj);
console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.fullName);

```

###  07-private-properties-convention

```javascript
class Wallet {
  constructor() {
    this._balance = 0;
    this._transactions = [];
  }

  deposit(amount) {
    this._processDeposit(amount);
    this._balance += amount;
  }

  withdraw(amount) {
    if (amount > this._balance) {
      console.log('Not enough funds');
      return;
    }

    this._processWithdraw(amount);
    this._balance -= amount;
  }

  _processDeposit(amount) {
    console.log(`Depositing ${amount}`);

    this._transactions.push({
      type: 'deposit',
      amount,
    });
  }

  _processWithdraw(amount) {
    console.log(`Withdrawing ${amount}`);

    this._transactions.push({
      type: 'withdraw',
      amount,
    });
  }

  get balance() {
    return this._balance;
  }

  get transactions() {
    return this._transactions;
  }
}

const wallet = new Wallet();
wallet.deposit(300);
wallet.withdraw(50);
console.log(wallet.balance);
console.log(wallet.transactions);

```

###  08-class-fields-ES2022

```javascript
class Wallet {
  #balance = 0;
  #transactions = [];

  deposit(amount) {
    this.#processDeposit(amount);
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log('Not enough funds');
      return;
    }

    this.#processWithdraw(amount);
    this.#balance -= amount;
  }

  #processDeposit(amount) {
    console.log(`Depositing ${amount}`);

    this.#transactions.push({
      type: 'deposit',
      amount,
    });
  }

  #processWithdraw(amount) {
    console.log(`Withdrawing ${amount}`);

    this.#transactions.push({
      type: 'withdraw',
      amount,
    });
  }

  get balance() {
    return this.#balance;
  }

  get transactions() {
    return this.#transactions;
  }
}

const wallet = new Wallet();
wallet.deposit(500);
wallet.withdraw(100);
console.log(wallet.balance);

```

###  09-flags-descriptors

```javascript
// [[Configurable]] - if `true`, the property can be deleted and these attributes can be modified, otherwise not
// [[Enumerable]] - if `true`, the property will be returned in a `for...in` loop, otherwise not
// [[Writable]] - if `true`, the value of the property can be changed, otherwise not
// [[Value]] - the value of the property

Math.PI = 4;
console.log(Math.PI);

let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
// console.log(descriptor);

const rectObj = {
  name: 'Rectangle 1',
  width: 10,
  height: 10,
};

Object.defineProperty(rectObj, 'name', {
  writable: false,
  configurable: false,
  enumerable: false,
});

descriptor = Object.getOwnPropertyDescriptor(rectObj, 'name');
console.log(descriptor);

rectObj.name = 'New Name';
delete rectObj.name;

console.log(rectObj);

for (let [key, value] of Object.entries(rectObj)) {
  console.log(`${key}: ${value}`);
}

console.log(Object.getOwnPropertyDescriptors(rectObj));

```

### 10-freezing-sealing-properties

```javascript
// Sealing - Prevents properties from being added or removed. Can still be changed.

// Freezing - Prevents properties from being added, removed or changed

const rectObj = {
  name: 'Rectangle 1',
  width: 10,
  height: 10,
};

Object.seal(rectObj);

let descriptors = Object.getOwnPropertyDescriptors(rectObj);
// console.log(descriptors);

//  Can not add and remove properties
rectObj.color = 'red';
delete rectObj.name;

// Can change values
rectObj.width = 20;

// console.log(rectObj);

const circleObj = {
  name: 'Circle 1',
  radius: 30,
};

Object.freeze(circleObj);

descriptors = Object.getOwnPropertyDescriptors(circleObj);

// Can not add, remove or modify
circleObj.color = 'blue';
delete circleObj.name;
circleObj.name = 'New Name';

console.log(descriptors);

// If an object is frozen, it is also sealed
console.log('rectObj is sealed?', Object.isSealed(rectObj));
console.log('rectObj is frozen?', Object.isFrozen(rectObj));
console.log('circleObj is sealed?', Object.isSealed(circleObj));
console.log('circleObj is frozen?', Object.isSealed(circleObj));

```

<!-- 20240523 -->

##  16 Modules and Tooling

### Types of modules

- Common JS modules used by Node.js
- ES Modules (ESM, ES6 Modules) - FrontEnd

Module Bundlers

Webpack, Parcel vs React

### Node.js

No window or document object. Instead there is a global object.

###  01-installing-using-nodejs

#### Displaying a GitHub User

```javascript
async function getUser() {
  const response = await fetch("https://api.github.com/users/bbmorten");
  const data = await response.json();
  return data;
}

getUser().then((user) => {
  console.log(user);
});



```

###  02-commonjs-modules

```javascript title='utils.js'
function capitalizeWords(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.substr(1))
    .join(' ');
}

function makeMoney(amount) {
  return `$${amount}`;
}

module.exports = {
  capitalizeWords,
  makeMoney,
};

```

```javascript title='Person.js'
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
  }
}

module.exports = Person;


```

```javascript title='app.js'

const { capitalizeWords, makeMoney } = require('./utils');
const Person = require('./Person');

console.log(capitalizeWords('hello world'));
console.log(makeMoney(100));

const person1 = new Person('John', 30);
person1.greet(); 


```

Look at the code in "/Users/bulent/git-repos/elearning/oreilly-courses/javascript/mjfb-brad-traversy/app-mtp/app-mtp-person-class-example" for more examples.

- Can i use [link](https://caniuse.com/fetch) is a useful one
- Fetch vs Axios [Medium Article](https://medium.com/@johnnyJK/axios-vs-fetch-api-selecting-the-right-tool-for-http-requests-ecb14e39e285#:~:text=Axios%20will%20automatically%20transforms%20the,be%20stored%20in%20any%20variable.)

<!-- 20240528 -->

### 03-npm-modules

###  04-es-modules

###  05-webpack-basic-setup, module bundlers

####  webpack

So there's a few popular bundlers out there. But in this course, we're going to be focusing on Webpack. So we have others, like **Vite**, **Parcel**, **Snow pack**, these are all very modern bundlers webpack has really been around for a while. And it's kind of the original module bundler, which is why I want to use this one, rather than some of these other ones, because you're most likely going to run into it. Now, I will be completely honest with you and say that Webpack is probably the most difficult out of these four. But again, you're probably going to run into it. So it's good to learn it, and I'm not saying that to overwhelm you. I'm not saying that it's like terribly difficult, it just has a little bit more configuration. And the good news is, once you learn that configuration, you basically just create your like a boilerplate, like a just a boilerplate dev environment that you can use for future projects.

```shell
mkdir src dist
touch src/index.html
# index.html uses script file main.js originally but with the config file it is targeted to bundle.js
npm install -D webpack webpack-cli
npm install -D style-loader css-loader

```

```javascript title='webpack.config.js'
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};

```

```json title='package.json'

  "scripts": {
    "build": "webpack --mode production"
    
  },
```

```shell
npm install -D html-webpack-plugin
```

```javascript


const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{ test: /\.css$/, use: ['style-loader', 'css-loader'] }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Starter Pack',
      filename: 'index.html',
      template: './src/index.html',
    }),
  ],
};

```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <h1><%= htmlWebpackPlugin.options.title %></h1>
    <p>Hello World</p>
  </body>
</html>
```

####  Enable webpack-dev-server

```shell
npm i -D webpack-dev-server
```

```javascript title='webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 9000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [{ test: /\.css$/, use: ['style-loader', 'css-loader'] }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Starter Pack 5',
      filename: 'index.html',
      template: './src/index.html',
    }),
  ],
};

```

```json title='package.json'

  "scripts": {
    "build": "webpack --mode production",
    "start": "webpack serve --mode development",
    
  },
```

#### babel-loader & MiniCssExtractPlugin

```shell
npm i -D babel-loader @babel/core @babel/preset-env
npm install -D mini-css-extract-plugin
```

```javascript


const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 9000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack Starter Pack 5',
      filename: 'index.html',
      template: './src/index.html',
    }),
  ],
};

```

<!-- 20240529 -->

## 17-iterators-data-structures

### 01-symbols

```javascript
const sym1 = Symbol('sym1');
const sym2 = Symbol('sym2');

console.log(sym1, sym2);

// Get read-only description
console.log(Symbol('sym1').description);

// Symbols are unique
console.log(Symbol('sym1') === Symbol('sym1')); // false
console.log(Symbol().description); // undefined

// Ensure our id is unique and can not be overwritten
const user = {
  [Symbol('id')]: 1,
  name: 'John',
  email: 'john@gmail.com',
};

user.id = '123';

console.log(user);

// This will not work either
console.log(user[Symbol('id')]); // undefined

// Symbols are not enumerable
console.log(Object.keys(user));
console.log(Object.values(user));

for (let key in user) {
  console.log(key);
}

// getOwnPropertySymbols() - returns an array of symbols
console.log(Object.getOwnPropertySymbols(user));

// Using Symbol.for() for global symbols
const sym3 = Symbol.for('foo');
const sym4 = Symbol.for('foo');

console.log(sym3 === sym4); // true

// Symbol.keyFor() - returns a name of a global symbol
console.log(Symbol.keyFor(sym3)); // foo
// It will be undefined for any Symbol that is not global and not created with Symbol.for()
console.log(Symbol.keyFor(sym1)); // undefined

// toString() - returns a string representation of a symbol

console.log(sym1.toString()); // Symbol(sym1)
console.log(sym3.toString()); // Symbol(foo) ğ

// valueOf - returns a primitive value of a symbol
console.log(sym1.valueOf()); // Symbol(sym1)
console.log(sym3.valueOf()); // Symbol(foo)

```

### 02-iterators

```javascript
 // const app = {
//   nextIndex: 0,
//   teams: ['Red Sox', 'Yankees', 'Astros', 'Dodgers'],
//   next() {
//     if (this.nextIndex >= this.teams.length) {
//       return { done: true };
//     }

//     const returnValue = { value: this.teams[this.nextIndex], done: false };
//     this.nextIndex++;
//     return returnValue;
//   },
// };

// console.log(app.next());
// console.log(app.next());
// console.log(app.next());
// console.log(app.next());
// console.log(app.next());

const app = {
  teams: ['Red Sox', 'Yankees', 'Astros', 'Dodgers'],
  [Symbol.iterator]: function () {
    let nextIndex = 0;
    return {
      next: () => {
        return nextIndex < this.teams.length
          ? { value: this.teams[nextIndex++], done: false }
          : { done: true };
      },
    };
  },
};

const iterator = app[Symbol.iterator]();
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next());

for (const team of app) {
  console.log(team);
}

```

### 03-generators

```javascript
function* createTeamIterator(teams) {
  for (let i = 0; i < teams.length; i++) {
    yield teams[i];
  }
}

const teams = ['Red Sox', 'Yankees', 'Astros', 'Dodgers'];

const iterator = createTeamIterator(teams);

console.log(iterator.next().value); // Red Sox
console.log(iterator.next().value); // Yankees
console.log(iterator.next().value); // Astros
console.log(iterator.next().value); // Dodgers
console.log(iterator.next().done); // true

// Use with for... of
for (const team of createTeamIterator(teams)) {
  console.log(team);
}

// Use with spread operator
console.log([...createTeamIterator(teams)]);

// Use with destructuring
const [first, second, third] = createTeamIterator(teams);
console.log(first, second, third);

```

###  04-profile-scroller-project

```javascript
const people = [
  {
    name: 'Jamie Williams',
    age: 26,
    gender: 'female',
    location: 'Los Angeles, CA',
    imageURL: 'https://randomuser.me/api/portraits/women/1.jpg',
    looking: 'Female looking for male',
  },
  {
    name: 'John Smith',
    age: 35,
    gender: 'male',
    location: 'New York, NY',
    imageURL: 'https://randomuser.me/api/portraits/men/1.jpg',
    looking: 'Male looking for female',
  },
  {
    name: 'Bob Johnson',
    age: 42,
    gender: 'male',
    location: 'Chicago, IL',
    imageURL: 'https://randomuser.me/api/portraits/men/2.jpg',
    looking: 'Male looking for male',
  },
  {
    name: 'Shannon Jackson',
    age: 29,
    gender: 'female',
    location: 'Los Angeles, CA',
    imageURL: 'https://randomuser.me/api/portraits/women/2.jpg',
    looking: 'Female looking for female',
  },
];

const container = document.querySelector('.container');
const img = document.querySelector('img');
const profileInfo = document.querySelector('.profile-info');
const nextBtn = document.querySelector('#next');

function* createPeopleIterator() {
  let index = 0;
  while (true) {
    yield people[index++ % people.length];
  }
}

const iterator = createPeopleIterator();

nextBtn.addEventListener('click', () => {
  const person = iterator.next().value;
  img.src = person.imageURL;
  profileInfo.querySelector('h3').textContent = person.name;
  profileInfo.querySelectorAll('p')[0].textContent = `${person.age} Years Old`;
  profileInfo.querySelectorAll('p')[1].textContent = `From ${person.location}`;
  profileInfo.querySelectorAll('p')[2].textContent = person.looking;
});

nextBtn.click();

```

###  05-sets

```javascript
const set = new Set([1, 2, 2, 3, 3, 4]);

// Add a new value to the set
set.add(5);

console.log(set);

// Check for membership
console.log(set.has(5));
console.log(set.has(6));

// Remove a value from the set
set.delete(5);

console.log(set);

// Convert to array
const array = Array.from(set);

// Convert array to set
const arraySet = new Set(array);

// Get the size of the set
console.log('Set Size:', set.size);

// Get values from the set - returns an iterator
console.log(set.values());

// Iterate through the set using a loop
for (let item of set) {
  console.log(item);
}

// use iterator
const iterator = set.values();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// Clear the set
set.clear();

console.log(set);

```

### 06-maps

```javascript
const myMap = new Map();

myMap.set('name', 'John');
myMap.set(1, 'blue');
myMap.set(2, 'red');

console.log(myMap.get('name'));
console.log(myMap.get(1));
console.log(myMap.get(2));

console.log(myMap.size);

console.log(myMap.has(1));
console.log(myMap.has(3));

myMap.delete(2);

console.log(myMap);

const peopleMap = new Map();
peopleMap.set('brad', { phone: '555-555-5555', email: 'brad@gmail.com' });
peopleMap.set('jack', { phone: '555-555-5555', email: 'jack@gmail.com' });
peopleMap.set('jill', { phone: '555-555-5555', email: 'jill@gmail.com' });

peopleMap.forEach((person) => console.log(person.email));

console.log(peopleMap.keys());
console.log(peopleMap.values());
console.log(peopleMap.entries());

const iterator = peopleMap.values();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

const peopleArray = Array.from(peopleMap);
console.log(peopleArray);

```

### 07-poll-project

```javascript
const poll = new Map();
poll.set('React', 0);
poll.set('Vue', 0);
poll.set('Angular', 0);
poll.set('Svelte', 0);
poll.set('Other', 0);

function submitForm(e) {
  e.preventDefault();

  const selectedOption = document.querySelector(
    "input[name='poll-option']:checked"
  );

  if (!selectedOption) {
    alert('Please select an option');
    return;
  }

  let voteCount = poll.get(selectedOption.value);
  poll.set(selectedOption.value, voteCount + 1);

  displayResults();

  // Disable form fields after submit
  document
    .getElementById('poll-form')
    .querySelectorAll('input, button')
    .forEach((el) => el.setAttribute('disabled', true));
}

function displayResults() {
  const results = document.getElementById('results');
  results.innerHTML = '';
  for (let [option, votes] of poll) {
    const optionElement = document.createElement('div');
    optionElement.classList.add(
      'border-bottom',
      'p-2',
      'd-flex',
      'justify-content-between'
    );
    optionElement.innerHTML = `<strong>${option}: </strong> ${votes} votes`;
    results.appendChild(optionElement);
  }
}

document.getElementById('poll-form').addEventListener('submit', submitForm);

```

###  08-stack

```javascript
class Stack {
  constructor() {
    this._items = [];
    this._count = 0;
  }

  push(item) {
    this._items[this._count] = item;
    this._count++;
  }

  pop() {
    if (this.isEmpty()) {
      return 'Underflow';
    }

    const item = this._items[this._count - 1];
    this._count--;

    for (let i = this._count; i < this._items.length; i++) {
      this._items[i] = this._items[i + 1];
    }

    this._items.length = this._count;
    return item;
  }

  peek() {
    if (this.isEmpty()) {
      return 'No items in stack';
    }

    return this._items[this._count - 1];
  }

  isEmpty() {
    return this._count === 0;
  }

  length() {
    return this._count;
  }

  clear() {
    this._items = [];
    this._count = 0;
  }
}

const stack = new Stack();

stack.push('Item 1');
stack.push('Item 2');
stack.push('Item 3');
stack.push('Item 4');
stack.push('Item 5');

stack.pop();
stack.pop();

// stack.clear();

console.log('Top Item: ', stack.peek());
console.log('Stack Length: ', stack.length());

```

###  09-queues

```javascript
class Queue {
  constructor() {
    this._items = [];
    this._count = 0;
    this._front = 0;
  }

  enqueue(item) {
    this._items[this._count] = item;
    this._count++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    const item = this._items[this._front];
    for (let i = this._front; i < this._count - 1; i++) {
      this._items[i] = this._items[i + 1];
    }
    this._count--;
    this._items.length = this._count;
    return item;
  }

  peek() {
    if (this.isEmpty()) {
      return 'No items in the queue';
    }

    return this._items[this._front];
  }

  length() {
    return this._count - this._front;
  }

  isEmpty() {
    return this._count === 0;
  }
}

const q = new Queue();

q.enqueue('Item 1');
q.enqueue('Item 2');
q.enqueue('Item 3');

q.dequeue();
q.dequeue();

console.log('Front Item: ', q.peek());
console.log('Queue Length: ', q.length());

```

<!-- 20240603 -->

##  18-unit-testing-algorithms

###  01-jest-setup

###  02-grouping-tests

###  03-reverse-string

###  04-palindrome

###  05-array-chunking

### 06-anagrams

###  07-getelementsbytag

###  08-hasduplicateids

## 19-nodejs-modules

###  01-fs-module

### 02-path-module

###  03-os-module

###  04-url-qs-module

###  05-http-module

##  Chapter 21-22 randomideas-api

Bu chapterlar Docker Desktop için uyarlandı. Çalışan versiyon için

[Implementation](./../node.js/express.md#an-containerized-express-front-end-with-webpack) <!-- file not found -->
[Final version at the of the course](https://github.com/bbmorten/randomideas-api.git#frontend-final)

```shell
❯ git remote -v
origin  https://github.com/bbmorten/randomideas-api.git (fetch)
origin  https://github.com/bbmorten/randomideas-api.git (push)

randomideas-api on  frontend-final via 🐳 desktop-linux on ☁️  bulent@btegitim.com 
❯ git branch
  frontend-apiserver-db-mongo-express-all-together-initial
* frontend-final
  main
  mjbt
  mongo
```