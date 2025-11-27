import React from 'react'
import React, { useState, useEffect } from 'react'
import { getUserPlaylists } from '../api/spotify'
import PlaylistCard from '../components/PlaylistCard'

export default function PlayList () {
    const [list, setList] = useState([])
  return (
    <div>
      <h2 className="">Your Playlists</h2>
<div className="">
{list.map(pl => <PlaylistCard key={pl.id} playlist={pl} />)}
</div>
    </div>
  )
}
