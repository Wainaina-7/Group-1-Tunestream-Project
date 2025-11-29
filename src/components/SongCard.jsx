import React from 'react'


export default function SongCard({ song }) {
return (
<div className="flex items-center gap-4 bg-gray-900 p-4 rounded-xl border border-gray-800 shadow hover:shadow-lg transition cursor-pointer">
<h3 className="w-16 h-16 rounded-md object-cover">{song.name}</h3>
<p className="text-white font-semibold text-lg">{song.artists[0]?.name}</p>
</div>
)
}