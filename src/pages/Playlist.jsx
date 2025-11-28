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
    <div>
      <h2 className="">Your Playlists</h2>
<div className="">
{list.map(pl => <PlaylistCard key={pl.id} playlist={pl} />)}
</div>
    </div>
  )
}
