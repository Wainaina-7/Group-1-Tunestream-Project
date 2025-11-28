import React, { useState } from 'react'
import { createPlaylist } from '../api/spotify'
export default function CreatePlaylist() {
const [name, setName] = useState('')
const [desc, setDesc] = useState('')
const [status, setStatus] = useState('')
const userId = localStorage.getItem('spotify_user_id')
  return (
    <div>
<h2 className="">Create Playlist</h2>
<input className="" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
<input className="" placeholder="Description" value={desc} onChange={e => setDesc(e.target.value)} />
<button className="" onClick={submit}>Create</button>
{status && <p className="">{status}</p>}
    </div>
  )
}
