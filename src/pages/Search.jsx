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
        <h2 className="text-3xl font-bold mb-4">Search Music</h2>
<input
className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none mb-6"
placeholder="Search tracks..."
value={query}
onChange={e => setQuery(e.target.value)}
/>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
{results.map(song => <SongCard key={song.id} song={song} />)}
</div>
    </div>
)
}