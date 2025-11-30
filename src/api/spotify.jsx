const BASE = 'https://api.spotify.com/v1'

function authHeader() {
return { Authorization: `Bearer ${localStorage.getItem('access_token')}` }
}


export function searchTracks(query) {
return fetch(`${BASE}/search?q=${query}&type=track&limit=12`, {
headers: authHeader()
})
.then(res => res.json())
.then(data => data.tracks.items)
}


export function getUserPlaylists() {
return fetch(`${BASE}/me/playlists`, { headers: authHeader() })
.then(res => res.json())
.then(data => data.items)
}


export function createPlaylist(userId, name, description) {
return fetch(`${BASE}/users/${userId}/playlists`, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
...authHeader()
},
body: JSON.stringify({ name, description })
}).then(res => res.json())
}