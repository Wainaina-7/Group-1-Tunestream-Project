## Tunestream
## Tunestream integrates personalized recommendations, curated playlists, and interactive features that enhance music discovery and listening experience. Built with Vite for fast and efficient front-end performance, the app provides a seamless, responsive interface for music lovers on any device.It uses Spotify’s Web API to allow users to search for music, browse their playlists, and create new playlists — all inside a clean, modern UI.

## Features

1. Spotify Authentication
Login using a Spotify account and grant permission for the app to access playlists and saved tracks.

2.Search for Music
Search songs, artists, and albums using real Spotify data.

3. View User Playlists
Automatically loads the logged-in user’s playlists from Spotify.

4. Fully Client-Side Routed
Using BrowserRouter, Routes, and Link to switch between pages without refreshing.
 
 5. Tailwind UI
Clean, dark-mode Spotify-style design using Tailwind CSS 3.41.

## Technologies used

Vite.

React Router DOM.

Tailwind CSS 3.41.

Spotify Web API.

JavaScript.

## Folders

tunestream
│── src
│   ├── api
│   │   └── spotify.jsx
│   ├── components
│   │   ├── Navbar.jsx
│   │   ├── PlaylistCard.jsx
│   │   └── SongCard.jsx
│   ├── pages
│   │   ├── Home.jsx
│   │   ├── Search.jsx
│   │   ├── Playlist.jsx
│   │   ├── CreatePlaylist.jsx
│   │   └── Login.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│── README.md

## Application Routes
Route	      Page/compoment                   Description
/	            Home	                            Landing page
/search	      Search	                         Search songs via Spotify API
/playlists	 Playlist	                         Display user's Spotify playlists
/create	     CreatePlaylist	                     Create a new playlist
/login	      Login	                               Spotify  login button


## Spotify Authentication Setup

Tunestream requires:

1. A Spotify Developer App.

2. A Redirect URL.


## Create Spotify App

Go to: https://developer.spotify.com/dashboard

Create a new app and copy:

Client ID

Redirect URI

## Implement Authorization Code Flow

Your auth flow should:

Redirect user to Spotify login page.

Receive authorization code.

Exchange code for access token.

Save access_token to localStorage.

Optionally save the user’s Spotify ID.

Tunestream expects:

localStorage.setItem('access_token', '...')
localStorage.setItem('spotify_user_id', '...')

## API Functions Used

All API requests use Bearer token authentication.

 Search Tracks
searchTracks(query)

 Get User Playlists
getUserPlaylists()

Create Playlist
createPlaylist(userId, name, description)

## Pages Explanation
1. Home.jsx

Simple landing page welcoming the user.

2. Search.jsx

Uses useState + useEffect

Sends GET requests with .then()

Displays results using <SongCard />

3. Playlist.jsx

Fetches playlists on mount.

Maps playlists into <PlaylistCard />

4. CreatePlaylist.jsx

Uses useState for form inputs.

Sends POST request with .then().

Confirms playlist creation

5. Login.jsx

Displays "Connect to Spotify" button.

## Components Explanation
1. Navbar.jsx

Client-side navigation using React Router <Link>.

2. SongCard.jsx

Displays track name + artist with Tailwind styling.

3. PlaylistCard.jsx

Displays playlist name + description.

## Installation & Setup
- Created a react app using vite by running npm create vite@latest tunestream -- -- template react and accepting the subsequent commands.
- Launched the app on visual studio code by running cd tunestream then code tunestream.
- Ran npm install incase all the dependencies were not installed. Also ran npm i react-router-dom to add routing to the app later.
- Ran the command git init to initialize the app and keep track of git changes.
- Created a remote repository on github called Group-1-Tunestream-project and set it to public.
- Merged the remote repository with the tunestream app on visual studio code by running git remote add origin git@github.com:Wainaina-7/Group-1-Tunestream-Project.git
- Created our first commit message by running git add . then git commit -m "Initial commit"
- Pushed our changes to github by running git push -u origin main.
- Ran the server by running npm run dev.

## Future improvements
1. Save songs to liked songs.

2. Recently played section.

3. User profile page.

## Author 
## Group 1:
## Peter Kanyori
## Mark Irungu
## Angela Mwaura
## Brian Muturi