# Youtube Playlist Manager

Aşağıdaki notlar yapılanlar için fikir verme amaçlı.

[Youtube Data API](https://developers.google.com/youtube/v3/docs/playlists/list#usage)

```shell
❯ git remote -v
origin  https://github.com/bbmorten/mjfb-brad-traversy.git (fetch)
origin  https://github.com/bbmorten/mjfb-brad-traversy.git (push)

workout-files/youtube-playlist-webpack-bootstrap/dist on  youtube-playlist-webpack-bootstrap via  v22.1.0 on ☁️  bulent@btegitim.com 
❯ git branch --list
    ...
  youtube-list
  youtube-playlist-items
* youtube-playlist-webpack-bootstrap

```

```shell
npm install
npm start
```

##  First Version

Creating a YouTube playlist manager in JavaScript using the Fetch API can be a rewarding project. It involves interacting with the YouTube Data API to authenticate users and manage their playlists. Below, I outline a basic structure for your application, including steps for authenticating users with Google's OAuth 2.0 and fetching playlist data.

### 1. Setup and Prerequisites

- **Google Developer Console**: You'll need a Google Developer account and a project set up in the Google Developer Console. Here, you will enable the YouTube Data API and create credentials (OAuth 2.0 client ID and secret).
- **OAuth 2.0 Setup**: For authentication, you'll use OAuth 2.0. This requires setting up redirect URIs and obtaining the necessary scopes for accessing YouTube playlists.
- **Environment**: You can use a simple HTML and JavaScript setup, possibly with a server-side component if you plan to deploy it securely.

### 2. Basic HTML Structure

Here’s a simple HTML structure for your welcome page:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>YouTube Playlist Manager</title>
</head>
<body>
    <h1>YouTube Playlist Manager</h1>
    <button id="login">Login with YouTube</button>
    <h2>Playlists</h2>
    <ul id="playlistContainer"></ul>

    <script src="app.js"></script>
</body>
</html>
```

### 3. JavaScript: Authentication and Fetching Playlists

Create `app.js` to handle OAuth and API interactions:

```javascript
const global = {
  api: {
    clientId:
      '235210831175-osn0juc9dirqop9qmv9l9nb6rnfjiq1g.apps.googleusercontent.com',
    redirectUri: 'http://localhost:3000',
    clientSecret: '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',
  },
};
document.getElementById('login').addEventListener('click', authenticateUser);
document.addEventListener('DOMContentLoaded', handleAuthRedirect);

function authenticateUser() {
  const clientId = global.api.clientId;
  const redirectUri = global.api.redirectUri;
  const scope = 'https://www.googleapis.com/auth/youtube.readonly';
  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=token&prompt=consent`;

  window.location = authUrl;
}

function fetchPlaylists(accessToken) {
  const api = 'https://www.googleapis.com/youtube/v3/playlists';
  const parameters = `part=snippet&mine=true&access_token=${accessToken}`;
  console.log(accessToken);

  fetch(`${api}?${parameters}`)
    .then((response) => response.json())
    .then((data) => displayPlaylists(data))
    .catch((error) => console.error('Error fetching playlists:', error));
}

function displayPlaylists(data) {
  console.log(data);
  const playlists = data.items;
  const container = document.getElementById('playlistContainer');
  container.innerHTML = ''; // Clear previous entries

  playlists.forEach((playlist) => {
    const listItem = document.createElement('li');
    listItem.textContent = playlist.snippet.title;
    container.appendChild(listItem);
  });
}

// This function needs to be called with the actual access token
// You would typically extract the access token from the URL fragment after redirect
/* function handleAuthRedirect() {
  const accessToken = window.location.hash.split('&')[0].split('=')[1];
  if (accessToken) {
    fetchPlaylists(accessToken);
  }
} */

function handleAuthRedirect() {
  console.log('handleAuthRedirect is called');
  const hashParams = window.location.hash
    .substring(1)
    .split('&')
    .reduce(function (result, item) {
      let parts = item.split('=');
      result[parts[0]] = parts[1];
      return result;
    }, {});

  const accessToken = hashParams['access_token'];
  if (accessToken) {
    fetchPlaylists(accessToken);
  }
}

```

### 4. Handling the Redirect

- **Handle Redirect**: After the user authenticates, Google will redirect them to the URI specified. Your application must handle this redirect and parse the access token from the URL.
- **Extract Access Token**: The `handleAuthRedirect` function processes the redirection and extracts the token from the URL fragment.

### 5. Security Considerations

- **Secure Your Application**: Ensure that your client ID and secrets are not exposed in client-side code for production applications. You might need to handle OAuth token exchange through a server component to keep keys secure.
- **CORS**: When calling the YouTube API directly from the browser, ensure that you handle CORS (Cross-Origin Resource Sharing) restrictions.

### Conclusion

This setup provides a basic structure for a YouTube playlist manager using JavaScript. You will need to expand and adapt this example depending on the specific features and user interactions you plan to support, especially around error handling and user feedback. Additionally, consider using frameworks and libraries (like React or Angular) for more complex applications, as they can provide more robust solutions for state and UI management.

##  Second  version - WebPack and Bootstrap

To enhance the aesthetics and functionality of your YouTube Playlist Manager using **Bootstrap** and **Webpack**, you can start by integrating Bootstrap for UI improvements and Webpack to bundle your JavaScript code efficiently. Below, I'll guide you through the necessary steps and code adjustments.

### Step 1: Setup Webpack and Bootstrap

1. **Initialize npm** in your project directory if you haven't already:

   ```bash
   npm init -y
   ```

2. **Install Webpack and its necessary plugins**:

   ```bash
   npm install --save-dev webpack webpack-cli webpack-dev-server style-loader css-loader babel-loader @babel/core @babel/preset-env html-webpack-plugin
   ```

3. **Install Bootstrap**:

   ```bash
   npm install bootstrap
   ```

### Step 2: Configure Webpack

Create a `webpack.config.js` file in your project root:

```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};
```

### Step 3: Organize Your Source Files

Move your `index.html` and `app.js` to a new `src` directory. Update `index.html` to remove the script tag (Webpack will inject it), and add Bootstrap's CSS:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>YouTube Playlist Manager</title>
    <link href="node_modules/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h1>YouTube Playlist Manager</h1>
        <button id="login" class="btn btn-primary">Login with YouTube</button>
        <div class="row mt-3">
            <div class="col-md-6" id="playlistContainer"></div>
            <div class="col-md-6" id="playlistItemsContainer"></div>
        </div>
    </div>
</body>
</html>
```

### Step 4: Update JavaScript for Bootstrap UI

In `app.js`, you might want to enhance elements to use Bootstrap classes for better styling. For example:

```javascript
playlists.forEach((playlist) => {
  const listItem = document.createElement('div');
  listItem.className = 'list-group-item list-group-item-action';
  listItem.textContent = playlist.snippet.title;
  listItem.onclick = () => fetchPlaylistItems(playlist.id, accessToken);
  container.appendChild(listItem);
});
```

### Step 5: Build and Run

- Update your `package.json` scripts:

  ```json
  "scripts": {
    "start": "webpack-dev-server --open",
    "build": "webpack --mode production"
  }
  ```

- Run your project:

  ```bash
  npm start
  ```

This will compile your JavaScript and serve your project on a local server, typically at `http://localhost:9000/`, with live reloading enabled.

By integrating Bootstrap, your application will have a more modern look, and managing JavaScript dependencies through Webpack will enhance your development process. This setup should help you create a more sophisticated and maintainable YouTube Playlist Manager.
