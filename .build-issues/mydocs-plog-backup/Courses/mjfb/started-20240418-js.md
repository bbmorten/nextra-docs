#  Chapter 8-10

## Errata

- Day 14 - 20240418
- Day 15 - 20240419
- Day 16 - 20240421
- Day 17 - 20240422
- Day 18 - 20240424
- Day 19 - 20240425

<!-- 20240418 -->

##  08

### 06-input-events

```javascript
const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput(e) {
  heading.textContent = e.target.value;
}

function onChecked(e) {
  const isChecked = e.target.checked;
  heading.textContent = isChecked ? 'Checked' : 'Not Checked';
}

function onFocus() {
  console.log('Input is focused');
  itemInput.style.outlineStyle = 'solid';
  itemInput.style.outlineWidth = '1px';
  itemInput.style.outlineColor = 'red';
}

function onBlur() {
  console.log('Input is not focused');
  itemInput.style.outlineStyle = 'none';
}

// input, change, focus and blur events
itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('change', onInput);
checkbox.addEventListener('input', onChecked);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);

```

###  07-form-submission

```javascript
const form = document.getElementById('item-form');

function onSubmit(e) {
  e.preventDefault();

  // Get value with .value
  const item = document.getElementById('item-input').value;
  const priority = document.getElementById('priority-input').value;

  if (item === '' || priority === '0') {
    alert('Please fill in all fields');
    return;
  }

  console.log(item, priority);
}

// Using the FormData Object
function onSubmit2(e) {
  e.preventDefault();

  const formData = new FormData(form);

  // Get individual items
  const item = formData.get('item');
  const priority = formData.get('priority');

  console.log(item, priority);

  // Get al entried as an Iterator
  const entries = formData.entries();
  console.log(entries);

  // Loop through entries
  for (let entry of entries) {
    console.log(entry[1]);
  }
}

form.addEventListener('submit', onSubmit2);

```

<!-- 20240419 -->

###  08-event-bubbling

```javascript
const button = document.querySelector('form button');
const div = document.querySelector('form div:nth-child(2)');
const form = document.querySelector('form');

button.addEventListener('click', (e) => {
  alert('Button was clicked');
  e.stopPropagation();
});

div.addEventListener('click', () => {
  alert('Div was clicked');
});

form.addEventListener('click', () => {
  alert('Form was clicked');
});

document.body.addEventListener('click', () => {
  alert('Body was clicked');
});

```

###  09-event-delegation

```javascript
const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Add an event listener on all items
// listItems.forEach((item) => {
//   item.addEventListener('click', (e) => {
//     e.target.remove();
//   });
// });

// Add a single event listener on the parent (Event Delegation)
list.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.remove();
  }
});

list.addEventListener('mouseover', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.style.color = 'red';
  }
});

```

### 10-window-events

- DOM Loaded
- Page Loaded

```javascript
// On Page Load
// window.onload = function () {
//   document.querySelector('h1').textContent = 'Hello World';
// };

window.addEventListener('load', () => console.log('Page Loaded'));

// On DOM Load
window.addEventListener('DOMContentLoaded', () => console.log('DOM Loaded'));

console.log('Run me');

// Resize Event
window.addEventListener('resize', () => {
  document.querySelector(
    'h1'
  ).innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}`;
});

// Scroll Event
window.addEventListener('scroll', () => {
  console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);

  if (window.scrollY > 70) {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
});

// Focus & Blur Events
window.addEventListener('focus', () => {
  document.querySelectorAll('p').forEach((p) => {
    p.style.color = 'blue';
  });
});

window.addEventListener('blur', () => {
  document.querySelectorAll('p').forEach((p) => {
    p.style.color = 'black';
  });
});

```

<!-- 20240421 -->

##  09-shopping-list-project

/Users/bulent/git-repos/temp/shopping-w-js/00-starter-files/shopping-list

###  Add Item

```javascript
const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  // Validate Input
  if (newItem === '') {
    alert('Please add an item');
    return;
  }

  // Create list item
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(newItem));

  const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);

  itemList.appendChild(li);

  itemInput.value = '';
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



// Event Listeners
itemForm.addEventListener('submit', addItem);


```

<!-- 20240422 -->

###  Remove Item

```javascript
const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');

function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  // Validate Input
  if (newItem === '') {
    alert('Please add an item');
    return;
  }

  // Create list item
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(newItem));

  const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);

  itemList.appendChild(li);

  itemInput.value = '';
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

function removeItem(e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
    e.target.parentElement.parentElement.remove();
  }
}

function clearItems() {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

// Event Listeners
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);

```

### Clear UI State and Filter Items

```javascript
const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const itemFilter = document.getElementById("filter");
const clearBtn = document.getElementById("clear");

function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  // Validate Input
  if (newItem === "") {
    alert("Please add an item");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem));

  const button = createButton("remove-item btn-link text-red");
  li.appendChild(button);

  // Add li to the DOM
  itemList.appendChild(li);

  checkUI();

  itemInput.value = "";
}

function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;
  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}

function removeItem(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    e.target.parentElement.parentElement.remove();
    checkUI();
  }
}

function clearItems() {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
  checkUI();
}

function checkUI() {
  // const items = itemList.querySelectorAll("li");
  const items = itemList.children;
  if (items.length === 0) {
    clearBtn.style.display = "none";
    itemFilter.style.display = "none";
  } else {
    clearBtn.style.display = "block";
    itemFilter.style.display = "block";
  }
}

function filterItems(e) {
  const text = e.target.value.toLowerCase();
  const items = itemList.querySelectorAll("li");

  items.forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase();
    if (itemName.indexOf(text) !== -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

// Event Listeners
itemForm.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
clearBtn.addEventListener("click", clearItems);
itemFilter.addEventListener("input", filterItems);

checkUI();

```
<!-- 20240424 -->

###  Local storage

- Add Items to Local Storage
- Display Items from Local storage
- Remove Items from Local storage
- Set Item to edit
- Update Items and reset state
- Prevent Duplicate Items
- Update Items and reset state

All stored in deploy branch

<https://github.com/bbmorten/shopping-w-js.git>

## 09-asynchronous-javascript  

### How async JS works

![Callbacks](<Screenshot 2023-09-08 at 00.04.20.png>)
![Promises](<Screenshot 2023-09-08 at 00.08.55.png>)

###  01-settimeout-cleartimeout

```javascript
// setTimeout - takes in a callback and a time to wait until that callback is executed

document.querySelector('h1').textContent = 'START';


setTimeout(function () {
  console.log('CLG1');
}, 2000);


function changeText(str) {
  document.querySelector('h1').textContent = str;
  console.log(str);

}

// Named function
setTimeout(() => {
  changeText('CLG2');
}, 10000);



// clearTimeout() will clear a timer
const timerId = setTimeout(() => changeText('CLG3'), 20000);

document.querySelector('#cancel').addEventListener('click', () => {
  console.log(timerId);
  clearTimeout(timerId);
  console.log('Timer Cancelled');
  console.log('CLG4');

});

```

###  02-setinterval-clearinterval

```javascript
// const intervalID = setInterval(myCallback, 1000, 'Hello');

// function myCallback(a) {
//   console.log(a, Date.now());
// }

let intervalID;

function startChange() {
  if (!intervalID) {
    intervalID = setInterval(changeRandomColor, 1000);
  }
}

// function changeColor() {
//   if (document.body.style.backgroundColor !== 'black') {
//     document.body.style.backgroundColor = 'black';
//     document.body.style.color = 'white';
//   } else {
//     document.body.style.backgroundColor = 'white';
//     document.body.style.color = 'black';
//   }
// }

function changeRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${randomColor}`;
}

function stopChange() {
  clearInterval(intervalID);
}

document.getElementById('start').addEventListener('click', startChange);
document.getElementById('stop').addEventListener('click', stopChange);

```

###  03-callbacks

```javascript
// function toggle(e) {
//   e.target.classList.toggle('danger');
// }

// document.querySelector('button').addEventListener('click', toggle);

const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' },
];

function createPost(post, cb) {
  setTimeout(() => {
    posts.push(post);
    cb();
  }, 2000);
}

function getPosts() {
  setTimeout(() => {
    posts.forEach(function (post) {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.querySelector('#posts').appendChild(div);
    });
  }, 1000);
}

createPost({ title: 'Post Three', body: 'This is post' }, getPosts);

```

<!-- 20240425 -->

###  04-ajax-xhr

- Samples are in the folder /Users/bulent/git-repos/elearning/oreilly-courses/javascript/mjfb-brad-traversy/Modern-JavaScript-from-the-Beginning---Second-Edition/09-asynchronous-javascript/04-ajax-xhr
- Two more examples are added. Jokes challenge is handled.

###  06-callback-hell

```javascript
function getData(endpoint, cb) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', endpoint);

  xhr.onreadystatechange = function () {
    if ((this.readyState === 4) & (this.status === 200)) {
      cb(JSON.parse(this.responseText));
    }
  };

  setTimeout(() => {
    xhr.send();
  }, Math.floor(Math.random() * 3000) + 1000);
}

getData('./movies.json', (data) => {
  console.log(data);
  getData('./actors.json', (data) => {
    console.log(data);
    getData('./directors.json', (data) => {
      console.log(data);
    });
  });
});

```

<!-- Starting from here /Users/bulent/git-repos/temp/shopping-w-js/07-promises -->

###  07-promises

###  08-callback-to-promise

###  09-promise-chaining

###  10-promises-vs-callback-hell

### 11-promise-all
