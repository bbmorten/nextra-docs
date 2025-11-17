#  Chapter 11,12,13

## Errata

- Day 20 - 20240502
- Day 21 - 20240506
- Day 22 - 20240508
- Day 23-24 - 20240511

<!-- 20240502 -->

##  11-fetch-and-async-await

###  01-fetch-basics

```javascript
// Fetching a JSON file
fetch('./movies.json')
  .then((response) => response.json())
  .then((data) => console.log(data));

// Fetching a text file
fetch('./test.txt')
  .then((response) => response.text())
  .then((data) => console.log(data));

// Fetching from an API
fetch('https://api.github.com/users/bradtraversy')
  .then((response) => response.json())
  .then((data) => (document.querySelector('h1').textContent = data.login));

```

### 02-random-user-project

```javascript
function fetchUser() {
  showSpinner();
  fetch('https://randomuser.me/api')
    .then((res) => res.json())
    .then((data) => {
      hideSpinner();
      displayUser(data.results[0]);
    });
}

function displayUser(user) {
  const userDisplay = document.querySelector('#user');

  if (user.gender === 'female') {
    document.body.style.backgroundColor = 'rebeccapurple';
  } else {
    document.body.style.backgroundColor = 'steelblue';
  }

  userDisplay.innerHTML = `
  <div class="flex justify-between">
  <div class="flex">
    <img
      class="w-48 h-48 rounded-full mr-8"
      src="${user.picture.large}"
    />
    <div class="space-y-3">
      <p class="text-xl">
        <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
      </p>
      <p class="text-xl">
        <span class="font-bold">Email: </span> ${user.email}
      </p>
      <p class="text-xl">
        <span class="font-bold">Phone: </span> ${user.phone}
      </p>
      <p class="text-xl">
        <span class="font-bold">Location: </span> ${user.location.city} ${user.location.country}
      </p>
      <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
    </div>
  </div>
</div>
  `;
}

function showSpinner() {
  document.querySelector('.spinner').style.display = 'block';
}

function hideSpinner() {
  document.querySelector('.spinner').style.display = 'none';
}

document.querySelector('#generate').addEventListener('click', fetchUser);

fetchUser();

```

- A nice spinner css example

```css
.spinner {
  --frame: 1s;
}
.spinner,
.spinner::before,
.spinner::after {
  border: 5px solid white;
  border-top-color: transparent;
  border-bottom-color: transparent;
  border-radius: 50%;
}
.spinner {
  margin: auto;
  font-size: 4em;
  position: absolute;
  top: 4px;
  left: 140px;

  width: 0.5em;
  height: 0.5em;
  -webkit-animation: anim-spinner var(--frame) ease infinite;
  animation: anim-spinner var(--frame) ease infinite;
}
.spinner::before,
.spinner::after {
  content: '';
  position: absolute;
}
.spinner::before {
  inset: 1px;
  -webkit-animation: anim-spinner calc(var(--frame) * 4.3) ease-in infinite;
  animation: anim-spinner calc(var(--frame) * 4.3) ease-in infinite;
}
.spinner::after {
  inset: 7px;
  -webkit-animation: anim-spinner calc(var(--frame) * 1.51) ease-out infinite;
  animation: anim-spinner calc(var(--frame) * 1.51) ease-out infinite;
}

@-webkit-keyframes anim-spinner {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
@keyframes anim-spinner {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

```

###  03-fetch-options

```javascript
/*
  COMMON FETCH OPTIONS
  method: HTTP method you want to use
  body: Data you want to send. Usually to be put in a database, etc
  headers: Any HTTP headers you want to send
*/

function createPost({ title, body }) {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      'Content-Type': 'application/json',
      token: 'abc123',
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

createPost({ title: 'My Post', body: 'This is my Post' });

```

###  04-typicode-todos-mini-project

```javascript
const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = () => {
  fetch(apiUrl + '?_limit=10')
    .then((res) => res.json())
    .then((data) => {
      data.forEach((todo) => addTodoToDOM(todo));
    });
};

const addTodoToDOM = (todo) => {
  const div = document.createElement('div');
  div.classList.add('todo');
  div.appendChild(document.createTextNode(todo.title));
  div.setAttribute('data-id', todo.id);

  if (todo.completed) {
    div.classList.add('done');
  }

  document.getElementById('todo-list').appendChild(div);
};

const createTodo = (e) => {
  e.preventDefault();

  const newTodo = {
    title: e.target.firstElementChild.value,
    completed: false,
  };

  fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(newTodo),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => addTodoToDOM(data));
};

const toggleCompleted = (e) => {
  if (e.target.classList.contains('todo')) {
    e.target.classList.toggle('done');

    updateTodo(e.target.dataset.id, e.target.classList.contains('done'));
  }
};

const updateTodo = (id, completed) => {
  fetch(`${apiUrl}/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ completed }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const deleteTodo = (e) => {
  if (e.target.classList.contains('todo')) {
    const id = e.target.dataset.id;
    fetch(`${apiUrl}/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then(() => e.target.remove());
  }
};

const init = () => {
  document.addEventListener('DOMContentLoaded', getTodos);
  document.querySelector('#todo-form').addEventListener('submit', createTodo);
  document
    .querySelector('#todo-list')
    .addEventListener('click', toggleCompleted);
  document.querySelector('#todo-list').addEventListener('dblclick', deleteTodo);
};

init();

```

<!-- 20240504 -->

###  05-fetch-error-handling

This is a super simple service for generating different HTTP codes.

[https://httpstat.us/](https://httpstat.us/)

Random user generator code is nice with its css.

</Users/bulent/git-repos/elearning/oreilly-courses/javascript/mjfb-brad-traversy/Modern-JavaScript-from-the-Beginning---Second-Edition/10-fetch-and-async-await/05-fetch-error-handling/random-user-generator>

### 06-async and await

```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: 'John', age: 20 });
  }, 1000);
});

// promise.then((data) => console.log(data));

async function getPromise() {
  const response = await promise;
  console.log(response);
}

// getPromise();

async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  console.log(data);
}

// getUsers();

const getPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  throw new Error('Hello');

  console.log(data);
};

getPosts().catch((error) => console.log(error));

```

###  07-try-catch

```javascript
// try {
//   console.log(x);
// } catch (error) {
//   console.log('Error: ' + error);
// }

function double(number) {
  if (isNaN(number)) {
    throw new Error(number + ' is not a number');
  }

  return number * 2;
}

try {
  const y = double('hello');
  console.log(y);
} catch (error) {
  console.log(error);
}

```

### 08-async-await-error-handling

```javascript
const getUsers = async () => {
  try {
    // const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const response = await fetch('http://httpstat.us/500');

    if (!response.ok) {
      throw new Error('Request Failed');
    }

    const data = await response.text();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const getPosts = async () => {
  // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const response = await fetch('http://httpstat.us/500');

  if (!response.ok) {
    throw new Error('Request Failed');
  }

  const data = await response.text();

  console.log(data);
};

// getUsers();
getPosts().catch((error) => console.log(error));

```

###  09-multiple-promises-async-await

getData function is never used in real life. Just for learning.

```javascript
function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', endpoint);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject('Error: Something went wrong');
        }
      }
    };

    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}

// getData('./movies.json')
//   .then((movies) => {
//     console.log(movies);
//     return getData('./actors.json');
//   })
//   .then((actors) => {
//     console.log(actors);
//     return getData('./directors.json');
//   })
//   .then((directors) => {
//     console.log(directors);
//   })
//   .catch((error) => console.log(error));

async function getAllData() {
  const movies = await getData('./movies.json');
  const actors = await getData('./actors.json');
  const directors = await getData('./directors.json');
  console.log(movies, actors, directors);
}

async function getAllDataWithFetch() {
  const moviesRes = await fetch('./movies.json');
  const movies = await moviesRes.json();

  const actorsRes = await fetch('./actors.json');
  const actors = await actorsRes.json();

  const directorsRes = await fetch('./directors.json');
  const directors = await directorsRes.json();

  console.log(movies, actors, directors);
}

async function getAllDataPromiseAll() {
  const [moviesRes, actorsRes, directorsRes] = await Promise.all([
    fetch('./movies.json'),
    fetch('./actors.json'),
    fetch('./directors.json'),
  ]);

  const movies = await moviesRes.json();
  const actors = await actorsRes.json();
  const directors = await directorsRes.json();

  console.log(movies, actors, directors);
}

async function getAllDataPromiseAll2() {
  const [movies, actors, directors] = await Promise.all([
    fetch('./movies.json').then((res) => res.json()),
    fetch('./actors.json').then((res) => res.json()),
    fetch('./directors.json').then((res) => res.json()),
  ]);

  console.log(movies, actors, directors);
}

// getAllData();
// getAllDataWithFetch();
// getAllDataPromiseAll();
getAllDataPromiseAll2();

```

##  12-flixx-app-project

- Orjinal repodan çalışma dosyaları [Workout files](../../../../elearning/oreilly-courses/javascript/mjfb-brad-traversy/workout-files) kısmına taşındı.
- Orjinal dosyalar bu dizinde /Users/bulent/git-repos/elearning/oreilly-courses/javascript/mjfb-brad-traversy/Modern-JavaScript-from-the-Beginning---Second-Edition
- Diğer dosyalar üretilen diğer kodlar.
- flixx-app Chapter 12 için.  
- Temiz bir şekilde bitirdik. Son hali /Users/bulent/git-repos/elearning/oreilly-courses/javascript/mjfb-brad-traversy. Branch is search.

<!-- Day 22 - 20240508 -->

###  TMDB Database

[TMDB Database and API](https://developer.themoviedb.org/docs/getting-started)

```shell
export API_KEY=d1edb7ba24bcbc7b19ac5b3cb6e8e141
export API_READ_KEY=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMWVkYjdiYTI0YmNiYzdiMTlhYzViM2NiNmU4ZTE0MSIsInN1YiI6IjY2M2I0ZTViNTEwZjI2ZDBlMTNmM2VhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vjd-DDOTraKTr7_xD704jq_wShCsnJUNUbkG4kMBKu4

curl --request GET \
     --url https://api.themoviedb.org/3/movie/latest \
     --header "Authorization: Bearer ${API_READ_KEY}" \
     --header 'accept: application/json'
```

```shell
curl --request GET \
     --url https://api.themoviedb.org/3/movie/latest \
     --header "Authorization: Bearer ${API_KEY}" \
     --header 'accept: application/json'
```

Running the project

```shell
python -m http.server -d ./ -b 127.0.0.1  5501
```

or

```shell
npm install -g browser-sync
browser-sync start --server --files "*.html, css/*.css, js/*.js"
```

After running the command, BrowserSync will provide you with URLs to access your project. Typically, it will be something like <http://localhost:3000>. You can open this URL in your browser to see your project.

###  Swiper API

[https://swiperjs.com/swiper-api](https://swiperjs.com/swiper-api)

<!-- 20240511 -->

##  13-web-browser-apis

###  01-geolocation api

```javascript
// getCurrentPosition()

function curSuccess(pos) {
  const coords = pos.coords;

  console.log(`Latitude: ${coords.latitude}`);
  console.log(`Longitude: ${coords.longitude}`);
  console.log(`Within: ${coords.accuracy} meters`);
}

function curError(err) {
  console.log(`Error: ${err.code} - ${err.message}`);
}

const curOptions = {
  enableHighAccuracy: true, // Use GPS if available
  timeout: 5000, // Time to wait to stop trying for location
  maximumAge: 0, // Do not use a cached position
};

// navigator.geolocation.getCurrentPosition(curSuccess, curError, curOptions);

// watchPosition()

const target = {
  latitude: 41.3874387,
  longitude: -71.394839,
};

function watchSuccess(pos) {
  const coords = pos.coords;
  console.log(coords);

  if (
    target.latitude === coords.latitude &&
    target.longitude === coords.longitude
  ) {
    console.log('You have reached your destination!');
    navigator.geolocation.clearWatch(id);
  }
}

function watchError(err) {
  console.log(`Error: ${err.code} - ${err.message}`);
}

const watchOptions = {
  enableHighAccuracy: true, // Use GPS if available
  timeout: 5000, // Time to wait to stop trying for location
  maximumAge: 0, // Do not use a cached position
};

const id = navigator.geolocation.watchPosition(
  watchSuccess,
  watchError,
  watchOptions
);

```

####  Location Intelligence Links, Map APIs

[MapBox]

[LeafLet]

```javascript
const global = {
  mapbox: {
    apiKey: 'pk.eyJ1IjoiYmJtb3J0ZW4iLCJhIjoiY2x3Mjg1NmZsMGlrbzJpcHlvdGRzdnE4ZyJ9.WR-Zuh7LWJQbMG-M0IUPfg'
  }
}
```

[MapBox]: https://www.mapbox.com/
[LeafLet]: https://leafletjs.com

###  02-map-position

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
      integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
      crossorigin=""
    />
    <script
      src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"
      integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM="
      crossorigin=""
    ></script>
    <script src="script.js" defer></script>
    <style>
      #map {
        width: 600px;
        height: 600px;
      }
    </style>
    <title>Map Position</title>
  </head>
  <body>
    <h1>Map Position</h1>
    <div id="map"></div>
  </body>
</html>

```

```javascript
const map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const marker = L.marker([0, 0]).addTo(map);

navigator.geolocation.getCurrentPosition(function (pos) {
  const lat = pos.coords.latitude;
  const lng = pos.coords.longitude;

  marker.setLatLng([lat, lng]).update();
  map.setView([lat, lng], 13);

  marker.bindPopup('<strong>Hello World</strong> <br> This is my location');
});

```

###  03-canvas

###  04-requestAnimationFrame

### 05-animated-clock-1 and 06-animated-clock-2

###  07-audio-api

### 08-music-player-project

###  09-drum-machine-project

###  10-video-api

###  11-video-player-project

###  12-web-animation-api

###  13-speech-recognition

###  14-speech-synthesis
