# Document Object Model

##  Select all elements in the document

```javascript
const allElements = document.querySelectorAll("*");

// Iterate over all elements and log them to the console
allElements.forEach(element => {
    console.log(element);
});

```

##  Removing list items

```javascript
function onClear() {
  const itemList = document.querySelector('ul');
  const items = itemList.querySelectorAll('li');

  // itemList.innerHTML = '';

  // items.forEach((item) => item.remove());

  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}
```
