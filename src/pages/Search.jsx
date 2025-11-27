import React, { useState, useEffect } from 'react'
import { searchTracks } from '../api/spotify'
import SongCard from '../components/SongCard'

export default function Search() {
const [query, setQuery] = useState('')
const [results, setResults] = useState([])

useEffect(() => {
if (query.length < 2) return
searchTracks(query).then(tracks => setResults(tracks))
}, [query])
return(
    <div>
        <h2 className="">Search Music</h2>
<input
className=""
placeholder="Search tracks..."
value={query}
onChange={e => setQuery(e.target.value)}
/>

<div className="">
{results.map(song => <SongCard key={song.id} song={song} />)}
</div>
    </div>
)
}