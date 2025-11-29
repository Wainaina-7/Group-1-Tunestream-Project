import React, { useState } from 'react'
import { createPlaylist } from '../api/spotify'
export default function CreatePlaylist() {
const [name, setName] = useState('')
const [desc, setDesc] = useState('')
const [status, setStatus] = useState('')
const userId = localStorage.getItem('spotify_user_id')
   function submit() {
createPlaylist(userId, name, desc).then(() => setStatus('Playlist created!'))
}
return (
    <div className ="max-w-md mx-auto p-6 bg-gray-900 rounded-xl shadow-lg">
<h2 className="text-3xl font-bold mb-6 text-white">Create Playlist</h2>
<input className="w-full p-3 mb-4 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
<input className="w-full p-3 mb-4 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Description" value={desc} onChange={e => setDesc(e.target.value)} />
<button className="w-full py-3 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-lg transition" onClick={submit}>Create</button>
{status && <p className="mt-4 text-center text-green-400 font-medium">{status}</p>}
    </div>
  )
}
