#  Chapter 6-8

## Errata

- Day 5 - 20240329
- Day 6 - 20240331
- Day 7 - 20240401
- Day 8 - 20240403
- Day 9 - 20240406
- Day 10 - 20240413
- Day 11 - 20240414
- Day 12 - 20240416
- Day 13 - 20240417

<!-- 20240329 -->

##  05-iteration-array-methods

###  01-for-loop

```javascript
// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement;

// INITITAL EXPRESSION - Initializes a variable/counter
// CONDITION EXPRESSION - Condition that the loop will continue to run as long as it is met or until the condition is false
// INCREMENT EXPRESSION - Expression that will be executed after each iteration of the loop. Usually increments the variable
// STATEMENT - Code that will be executed each time the loop is run. To execute a `block` of code, use the `{}` syntax

// for (let i = 0; i <= 10; i++) {
//   if (i === 7) {
//     console.log('7 is my lucky number');
//   } else {
//     console.log('Number ' + i);
//   }
// }

// Nested loops
// for (let i = 1; i <= 10; i++) {
//   console.log('Number ' + i);

//   for (let j = 1; j <= 5; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// Loop through an array
const names = ['Brad', 'Sam', 'Sara', 'John', 'Tim'];

for (let i = 0; i < names.length; i++) {
  if (names[i] === 'John') {
    console.log(names[i] + ' is the best');
  } else {
    console.log(names[i]);
  }
}

```

###  02-break-and-continue

```javascript
// Break
for (let i = 0; i <= 20; i++) {
  if (i === 15) {
    console.log('Breaking...');
    break;
  }
  console.log(i);
}

// Continue
for (let i = 0; i <= 20; i++) {
  if (i === 13) {
    console.log('Skipping 13...');
    continue;
  }
  console.log(i);
}

for (k = 1; k <= 100; k++) {
  console.log(k);
}

```

<!-- 31032024 -->

### 03-while and do-while

```javascript
let i = 0;

while (i <= 20) {
  console.log('Number ' + i);
  i++;
}

// Loop over arrays
const arr = [10, 20, 30, 40, 50];

while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

// Nesting while loops
while (i <= 5) {
  console.log('Number ' + i);

  let j = 1;
  while (j <= 5) {
    console.log(`${i} * ${j} = ${i * j}`);
    j++;
  }

  i++;
}

// Do While Loop - Always runs once
do {
  console.log('Number ' + i);
  i++;
} while (i <= 20);

```

### 05-for-of-loop

```javascript
// Loop through arrays
const items = ['book', 'table', 'chair', 'kite'];
const users = [{ name: 'Brad' }, { name: 'Kate' }, { name: 'Steve' }];

// for (const item of items) {
//   console.log(item);
// }

for (const user of users) {
  console.log(user.name);
}

// Loop over strings
const str = 'Hello World';

for (const letter of str) {
  console.log(letter);
}

// Loop over Maps
const map = new Map();
map.set('name', 'John');
map.set('age', 30);

for (const [key, value] of map) {
  console.log(key, value);
}

```

### 06-for-in-loop

```javascript
const colorObj = {
  color1: 'blue',
  color2: 'red',
  color3: 'yellow',
};

for (const key in colorObj) {
  console.log(key, colorObj[key]);
}
```

### **07-foreach**

```javascript

const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

// View prototype chain
console.log(socials.__proto__);

// Long form
socials.forEach(function (item) {
  console.log(item);
});

// Short form
socials.forEach((item) => console.log(item));

// We can also pass in the index and original array
socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

// Using a named function
function logSocials(social) {
  console.log(social);
}

socials.forEach(logSocials);

// Array of objects
const socialObjs = [
  { name: 'Twitter', url: 'https://twitter.com' },
  { name: 'Facebook', url: 'https://facebook.com' },
  { name: 'Linkedin', url: 'https://linkedin.com' },
  { name: 'Instagram', url: 'https://instagram.com' },
];

socialObjs.forEach((item) => console.log(item.url));

```

### 08-filter

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

// Short version
const evenNumbers2 = numbers.filter((number) => number % 2 === 0);

// Same with forEach
const evenNumbers3 = [];
numbers.forEach((number) => {
  if (number % 2 === 0) {
    evenNumbers3.push(number);
  }
});

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

// Get only retail companies
const retailCompanies = companies.filter(
  (company) => company.category === 'Retail'
);
// console.log(retailCompanies);

// Get companies that started in or after 1980 and ended in or before 2005
const earlyCompanies = companies.filter(
  (company) => company.start >= 1980 && company.end <= 2005
);
// console.log(earlyCompanies);

// Get companies that lasted 10 years or more
const longCompanies = companies.filter(
  (company) => company.end - company.start >= 10
);

console.log(longCompanies);

```

###  09-map

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers);

// Same with forEach
const doubledNumbers2 = [];
numbers.forEach((number) => {
  doubledNumbers2.push(number * 2);
});

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

// Create an array of company names
const companyNames = companies.map((company) => company.name);
// console.log(companyNames);

// Create an array with just company and category
const companyInfo = companies.map((company) => {
  return {
    name: company.name,
    category: company.category,
  };
});

// Create an array of objects with the name and the length of each company in years
const companyYears = companies.map((company) => {
  return {
    name: company.name,
    length: company.end - company.start + ' years',
  };
});

console.log(companyYears);

// Chain map methods
const squareAndDouble = numbers
  .map((number) => Math.sqrt(number))
  .map((sqrt) => sqrt * 2);

const squareAndDouble2 = numbers
  .map(function (number) {
    return Math.sqrt(number);
  })
  .map(function (sqrt) {
    return sqrt * 2;
  })
  .map(function (sqrtDoubled) {
    return sqrtDoubled * 3;
  });

// Chaining different methods
const evenDouble = numbers
  .filter((number) => number % 2 === 0)
  .map((number) => number * 2);

console.log(evenDouble);

```

###  10-reduce

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Add all numbers together
const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

const sum2 = numbers.reduce((acc, cur) => acc + cur, 0);

// Using a for loop
const sum3 = () => {
  let acc = 0;
  for (const cur of numbers) {
    acc += cur;
  }
  return acc;
};

// Shopping cart example (objects)
const cart = [
  { id: 1, name: 'Product 1', price: 130 },
  { id: 2, name: 'Product 2', price: 150 },
  { id: 3, name: 'Product 3', price: 200 },
];

const total = cart.reduce(function (acc, product) {
  return acc + product.price;
}, 0);

console.log(total);

```
<!-- 20240401 -->

##  06-document-object-model

###  01-dom-intro

```javascript
// Global window object
console.log(window);

// The document object is part of the window object
console.dir(window.document);

// We can access DOM elements directly with properties
console.log(document.body);
console.log(document.links[0]);

// We can set properties of elements
// document.body.innerHTML = '<h1>Hello from body</h1>';

// The document object has a ton of methods. One is `document.write()`, which will write something to the document
document.write('Hello from JS');

// We also have methods to select elements more directly
document.getElementById('main').innerHTML = '<h1>Hello from main</h1>';

document.querySelector('#main h1').innerText = 'Hello';

```

### 02-examining-document-object-properties

```javascript
let output;

// document.all is deprecated
output = document.all;
output = document.all[11];
output = document.all.length;

// Everything in the html tags
output = document.documentElement;

// Head and body tags
output = document.head;
output = document.body;

// HTMLCollection of everything in head/body
output = document.head.children;
output = document.body.children;

// Random properties
output = document.doctype;
output = document.domain;
output = document.URL;
output = document.characterSet;
output = document.contentType;

// Get all forms
output = document.forms;
output = document.forms[0];
output = document.forms[0].id;
output = document.forms[0].method;
output = document.forms[0].action;

// Change a form id
document.forms[0].id = 'new-id';

// Get all links
// output = document.links;
// output = document.links[0];
// output = document.links[0].href;
// output = document.links[0].href = 'https://facebook.com';
// output = document.links[0].id = 'google-link';
// output = document.links[0].className = 'google-class';
// output = document.links[0].classList;

// Get all images
output = document.images;
output = document.images[0];
output = document.images[0].src;

// Turn an HTMLCollection into an array
const forms = Array.from(document.forms);
forms.forEach((form) => console.log(form));

console.log(output);

```

<!-- 20240403 -->

### 03-dom-selectors-single-element

```javascript
// document.getElementById()

console.log(document.getElementById('app-title'));

// Get attributes
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').className);
console.log(document.getElementById('app-title').getAttribute('id'));

// Set attributes
document.getElementById('app-title').title = 'Shopping List';
document.getElementById('app-title').setAttribute('class', 'title');

const title = document.getElementById('app-title');

// Get/change content
console.log(title.textContent);
title.textContent = 'Hello World';
title.innerText = 'Hello Again';
title.innerHTML = '<strong>Shopping List</strong>';

// Change styles
title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '10px';

// document.querySelector()

// Use any CSS selector
console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector('li:nth-child(2)').innerText);

const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = 'Apple Juice';
secondItem.style.color = 'red';

// Use these methods on other elements
const list = document.querySelector('ul');
console.log(list);
const firstItem = list.querySelector('li');
firstItem.style.color = 'blue';


const uls = document.querySelectorAll('ul');

uls.forEach(function(ul){
    console.log(ul);
    ul.style.backgroundColor = 'orange';
    ul.style.padding = '10px';
    ul.style.borderRadius = '5px';
    ul.querySelectorAll('li').forEach(function(li){
        console.log(li);
        li.style.backgroundColor = 'yellow';
        li.style.padding = '5px';
        li.style.borderRadius = '5px';
        li.textContent = 'Item';
    });
});


```

###  04-dom-selectors-multiple-elements

```javascript
// querySelectorAll()
// Returns a NodeList

const listItems = document.querySelectorAll('.item');

// Access elements by index
console.log(listItems[1].innerText);

// Setting a color for specific element
listItems[1].style.color = 'red';

// We can use forEach() on a NodeList
listItems.forEach((item, index) => {
  item.style.color = 'red';

  if (index === 1) {
    item.remove();
  }

  if (index === 0) {
    item.innerHTML = ` Fruits
    <button class="remove-item btn-link text-red">
      <i class="fa-solid fa-xmark"></i>
    </button>`;
  }
});

// getElementsByClassName()
// Returns an HTMLCollection

const listItems2 = document.getElementsByClassName('item');

console.log(listItems2[2].innerText);

const listItemsArray = Array.from(listItems2);

listItemsArray.forEach((item) => {
  console.log(item.innerText);
});

// getElementsByTagName()

const listItems3 = document.getElementsByTagName('li');
console.log(listItems3[0].innerText);

```

###  05-traversing-the-dom-elements

```javascript
let output;

// Get child elements from a parent

const parent = document.querySelector('.parent');

output = parent.children;

output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;

parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = 'red';

parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child Three';

// Get parent elements from a child

const child = document.querySelector('.child');

output = child.parentElement;
child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.padding = '10px';

// Get sibling elements

const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem;
output = secondItem.nextElementSibling;

secondItem.nextElementSibling.style.color = 'green';
secondItem.previousElementSibling.style.color = 'orange';

console.log(output);

```

###  06-traversing-the-dom-nodes

The terms "DOM nodes" and "DOM elements" are often used interchangeably, but they have distinct meanings in the context of the Document Object Model (DOM), which represents HTML and XML documents in a tree structure. Here's the difference:

### DOM Nodes

- **Definition:** A DOM node is the generic term used for any type of object in the DOM hierarchy. A node can represent elements (such as `<div>`, `<span>`, and `<a>` tags), text within elements, attributes of elements, and other types of information. The node is the primary data structure of the DOM.
- **Types:** There are several types of DOM nodes, including element nodes, text nodes, attribute nodes, comment nodes, and document nodes, among others. Each type of node serves a different purpose in the structure and manipulation of the document.
- **Hierarchy:** Nodes have a hierarchical relationship with each other. They can have parent nodes, child nodes (including text nodes as children of element nodes), and sibling nodes.

### DOM Elements

- **Definition:** A DOM element is a specific type of DOM node that represents HTML or XML elements in the document. Elements correspond to the tags found in the markup language (HTML/XML) and have attributes and content.
- **Types:** Only one type exists — the element node, but it can represent any HTML or XML tag.
- **Hierarchy:** Elements can have attributes, child elements (making them parent elements in this context), and text content. They form the structure of the document as they can contain other elements or text.

In summary, while all DOM elements are DOM nodes (specifically, element nodes), not all DOM nodes are elements. Nodes encompass a broader category that includes text, comments, attributes, and the document itself, in addition to elements. This distinction is important for understanding how to traverse and manipulate the DOM when programming web pages or applications.

```javascript
let output;

// Get child nodes

const parent = document.querySelector('.parent');

output = parent.childNodes;
output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].outerHTML;

output = parent.childNodes[3].innerText = 'Child One';
output = parent.childNodes[5].style.color = 'red';

output = parent.firstChild;
output = parent.lastChild;

parent.lastChild.textContent = 'Hello';

// Get parent node

const child = document.querySelector('.child');

output = child.parentNode;
output = child.parentElement;

child.parentNode.style.backgroundColor = '#ccc';
child.parentNode.style.padding = '10px';

// Get sibling nodes
const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem.nextSibling;
output = secondItem.previousSibling;

console.log(output);

```

###  07-create-elements

```javascript
const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-element';
div.setAttribute('title', 'My Element');

// div.innerText = 'Hello World';

const text = document.createTextNode('Hello World');
div.appendChild(text);

// document.body.appendChild(div);

document.querySelector('ul').appendChild(div);
```

```javascript
[1,2,3,4,5].forEach((number) => {
  let el = document.createElement('li');
  el.textContent = number; // Assuming you want to set the number as the text content of the li
  document.body.appendChild(el); // This appends the created 'li' element to the body. You might want to append it somewhere else.
});

```

<!-- 06042024 -->

###  08-create-item-innerHTML-vs-createElement

```javascript
// Quick & Dirty
function createListItem(item) {
  const li = document.createElement('li');

  li.innerHTML = `${item}
  <button class="remove-item btn-link text-red">
    <i class="fa-solid fa-xmark"></i>
  </button>`;

  document.querySelector('.items').appendChild(li);
}

// Clean & Performant
function createNewItem(item) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  const button = document.createElement('button');
  button.className = 'remove-item btn-link text-red';

  const icon = document.createElement('i');
  icon.className = 'fa-solid fa-xmark';

  button.appendChild(icon);
  li.appendChild(button);

  document.querySelector('.items').appendChild(li);
}

createListItem('Eggs');
createNewItem('Cheese');

```

###  09-refactor-to-multiple-functions

```javascript
function createNewItem(item) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  const button = createButton('remove-item btn-link text-red');

  li.appendChild(button);

  document.querySelector('.items').appendChild(li);
}

function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;

  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);

  return button;
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

createNewItem('Cheese');
createNewItem('Sauce');

```

### 10-insert-elements

```javascript
// insertAdjacentElement Example
function insertElement() {
  const filter = document.querySelector('.filter');

  const h1 = document.createElement('h1');
  h1.textContent = 'insertAdjacentElement';

  filter.insertAdjacentElement('beforebegin', h1);
}

// insertAdjacentText Example
function insertText() {
  const item = document.querySelector('li:first-child');

  item.insertAdjacentText('beforebegin', 'insertAdjacentText');
}

// insertAdjacentHTML example
function insertHTML() {
  const clearBtn = document.querySelector('#clear');

  clearBtn.insertAdjacentHTML('afterend', '<h2>insertAdjacentHTML</h2>');
}

// insertBefore Example
function insertBeforeItem() {
  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  li.textContent = 'insertBefore';

  const thirdItem = document.querySelector('li:nth-child(3)');

  ul.insertBefore(li, thirdItem);
}

insertElement();

/*
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
*/

```
<!-- 20240413 -->

###  12-replacing-elements

```javascript
// replaceWith() Method
function replaceFirstItem() {
  const firstItem = document.querySelector('li:first-child');

  const li = document.createElement('li');
  li.textContent = 'Replaced First';

  firstItem.replaceWith(li);
}

// OuterHTML Property
function replaceSecondItem() {
  const secondItem = document.querySelector('li:nth-child(2)');

  secondItem.outerHTML = '<li>Replaced Second</li>';
}

// Replace All Items
function replaceAllItems() {
  const lis = document.querySelectorAll('li');

  // lis.forEach((item, index) => {
  //   // item.outerHTML = '<li>Replace All</li>';
  //   if (index === 1) {
  //     item.innerHTML = 'Second Item';
  //   } else {
  //     item.innerHTML = 'Replace All';
  //   }
  // });

  lis.forEach(
    (item, index) =>
      (item.outerHTML = index === 1 ? '<li>Second Item</li>' : '<li>Item</li>')
  );
}

// replaceChild() Method
function replaceChildHeading() {
  const header = document.querySelector('header');
  const h1 = document.querySelector('header h1');

  const h2 = document.createElement('h2');
  h2.id = 'app-title';
  h2.textContent = 'Shopping List';
  header.replaceChild(h2, h1);
}

replaceFirstItem();
replaceSecondItem();
replaceAllItems();
replaceChildHeading();

```

### 13-remove-elements

```javascript
// remove() Method
function removeClearButton() {
  const clearBtn = document.querySelector('#clear');
  clearBtn.remove();
}

// removeChild() Method
function removeFirstItem() {
  const ul = document.querySelector('ul');
  const li = document.querySelector('li:first-child');

  ul.removeChild(li);
}

// Other examples

function removeItem(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelector(`li:nth-child(${itemNumber})`);

  ul.removeChild(li);
}

function removeItem2(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelectorAll('li')[itemNumber - 1];

  ul.removeChild(li);
}

function removeItem3(itemNumber) {
  const li = document.querySelectorAll('li');
  li[itemNumber - 1].remove();
}

const removeItem4 = (itemNumber) =>
  document.querySelectorAll('li')[itemNumber - 1].remove();

removeClearButton();
// removeFirstItem();
// removeItem(2);
removeItem4(2);

```

###  14-styles-classes

```javascript
const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');

function run() {
  // className - Gets a string of all classes
  console.log(itemList.className);
  // Changing the classes with className
  text.className = 'card dark';

  // classList - Array of classes, which also has methods to add, remove, toggle and replace
  console.log(itemList.classList);

  // We can loop through the classes
  itemList.classList.forEach((c) => console.log(c));

  // Add, remove, toggle, replace
  text.classList.add('dark');
  text.classList.remove('card');
  text.classList.toggle('hidden');
  text.classList.replace('card', 'dark');

  // style property - Add styles to elements
  itemList.style.lineHeight = '3';

  items.forEach((item, index) => {
    item.style.color = 'red';

    if (index === 2) {
      item.style.color = 'blue';
    }
  });
}

document.querySelector('button').onclick = run;

```

<!-- 20240414 -->
##  07-events

###  01-event-listeners

***addEventListener*** method allows more than one function to be associated with the event.

```javascript
const clearBtn = document.querySelector('#clear');

function onClear() {
  const itemList = document.querySelector('ul');
  const items = itemList.querySelectorAll('li');

  // itemList.innerHTML = '';

  // items.forEach((item) => item.remove());

  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

// JavaScript Event Listener
clearBtn.onclick = function () {
  alert('Clear Items');
};

clearBtn.onclick = function () {
  console.log('Clear Items');
};

// addEventListener()
clearBtn.addEventListener('click', () => alert('Clear Items'));

// Use named function
clearBtn.addEventListener('click', onClear);

// removeEventListener()
setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// Fire off event from JS
setTimeout(() => clearBtn.click(), 5000);

```

###  02-mouse-events

```javascript
const logo = document.querySelector('img');

const onClick = () => console.log('click event');
const onDoubleClick = () => {
  if (document.body.style.backgroundColor !== 'purple') {
    document.body.style.backgroundColor = 'purple';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
};
const onRightClick = () => console.log('right click event');
const onMouseDown = () => console.log('mouse down event');
const onMouseUp = () => console.log('mouse up event');
const onMouseWheel = () => console.log('mouse wheel event');
const onMouseOver = () => console.log('mouse over event');
const onMouseOut = () => console.log('mouse out event');
const onDragStart = () => console.log('drag start event');
const onDrag = () => console.log('drag event');
const onDragEnd = () => console.log('drag end event');

// Event Listeners
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('mouseup', onMouseUp);
logo.addEventListener('wheel', onMouseWheel);
logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);
logo.addEventListener('dragstart', onDragStart);
logo.addEventListener('drag', onDrag);
logo.addEventListener('dragend', onDragEnd);

```
<!-- 20240416 -->

### 03-event-object

```javascript
const logo = document.querySelector('img');

function onClick(e) {
  // Event properties
  // console.log(e.target);
  // console.log(e.currentTarget);
  // console.log(e.type);
  // console.log(e.timeStamp);
  // console.log(e.clientX);
  // console.log(e.clientY);
  // console.log(e.offsetX);
  // console.log(e.offsetY);
  // console.log(e.pageX);
  // console.log(e.pageY);
  // console.log(e.screenX);
  // console.log(e.screenY);
}

function onDrag(e) {
  document.querySelector('h1').textContent = `X ${e.clientX} Y ${e.clientY}`;
}

logo.addEventListener('click', onClick);
logo.addEventListener('drag', onDrag);

// document.body.addEventListener('click', function (e) {
//   console.log(e.target);
//   console.log(e.currentTarget);
// });

// e.preventDefault() method prevents the default behavior
document.querySelector('a').addEventListener('click', function (e) {
  e.preventDefault();
  console.log('Link was clicked');
});

/*
- `target` - The element that triggered the event
- `currentTarget` - The element that the event listener is attached to (These are the same in this case
- `type` - The type of event that was triggered
- `timeStamp` - The time that the event was triggered
- `clientX` - The x position of the mouse click relative to the window
- `clientY` - The y position of the mouse click relative to the window
- `offsetX` - The x position of the mouse click relative to the element
- `offsetY` - The y position of the mouse click relative to the element
- `pageX` - The x position of the mouse click relative to the page
- `pageY` - The y position of the mouse click relative to the page
- `screenX` - The x position of the mouse click relative to the screen
- `screenY` - The y position of the mouse click relative to the screen
*/

```
<!-- 2024041701 -->

###  04-keyboard-events

```javascript
const itemInput = document.getElementById('item-input');

const onKeyPress = (e) => {
  console.log('keypress');
};

const onKeyUp = (e) => {
  console.log('keyup');
};

const onKeyDown = (e) => {
  // key
  // if (e.key === 'Enter') {
  //   alert('You pressed enter');
  // }

  // keyCode
  // https://www.toptal.com/developers/keycode/table-of-all-keycodes
  if (e.keyCode === 13) {
    alert('You pressed enter');
  }

  // code
  if (e.code === 'Digit1') {
    console.log('You pressed 1');
  }

  // repeat
  if (e.repeat) {
    console.log('You are holding down ' + e.key);
  }

  // shiftKey, ctrlKey & altKey
  console.log('Shift: ' + e.shiftKey);
  console.log('Control: ' + e.ctrlKey);
  console.log('Alt: ' + e.altKey);

  if (e.shiftKey && e.key === 'K') {
    console.log('You hit shift + K');
  }
};

// Event Listeners
itemInput.addEventListener('keypress', onKeyPress);
itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);

```

### 05-event-keycode-project

```javascript
// Method 1
// window.addEventListener('keydown', (e) => {
//   const insert = document.getElementById('insert');

//   insert.innerHTML = `
//     <div class="key">
//       ${e.key === ' ' ? 'Space' : e.key}
//       <small>e.key</small>
//     </div>

//     <div class="key">
//       ${e.keyCode}
//       <small>e.keyCode</small>
//     </div>

//     <div class="key">
//       ${e.code}
//       <small>e.code</small>
//     </div>
//   `;
// });

// Method 2
function showKeyCodes(e) {
  const insert = document.getElementById('insert');
  insert.innerHTML = '';

  const keyCodes = {
    'e.key': e.key === ' ' ? 'Space' : e.key,
    'e.keyCode': e.keyCode,
    'e.code': e.code,
  };

  for (let key in keyCodes) {
    const div = document.createElement('div');
    div.className = 'key';
    const small = document.createElement('small');

    const keyText = document.createTextNode(key);
    const valueText = document.createTextNode(keyCodes[key]);

    small.appendChild(keyText);
    div.appendChild(valueText);
    div.appendChild(small);

    insert.appendChild(div);
  }
}

window.addEventListener('keydown', showKeyCodes);

```
