import React from 'react'
import { useState, useEffect } from 'react'
import { getUserPlaylists } from '../api/spotify'
import PlaylistCard from '../components/PlaylistCard'

export default function Playlist () {
    const [list, setList] = useState([])

useEffect(() => {
getUserPlaylists().then(res => setList(res))
}, [])
  return (
    <div className = "p-6">
      <h2 className="text-3xl font-bold mb-6 text-white">Your Playlists</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
{list.map(pl => <PlaylistCard key={pl.id} playlist={pl} />)}
</div>
    </div>
  )
}
