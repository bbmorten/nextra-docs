# Random Colors

##  Method 1

```javascript
function changeRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${randomColor}`;
}
```

## Method 2

```javascript
function getRandomColor() {
  // Generate a random number between 0 and 16777215 (the maximum value for 24-bit color)
  const randomNum = Math.floor(Math.random() * 16777216);

  // Convert the random number to hexadecimal
  let hexColor = randomNum.toString(16);

  // Ensure the hexadecimal string is always 6 characters long
  while (hexColor.length < 6) {
    hexColor = "0" + hexColor;
  }

  // Return the formatted hexadecimal color code with a leading #
  return `#${hexColor}`;
}

// Test the function
const randomColor = getRandomColor();
console.log(randomColor);

```
