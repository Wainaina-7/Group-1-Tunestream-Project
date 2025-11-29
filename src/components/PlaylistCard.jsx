import React from 'react'

export default function PlaylistCard({ playlist }) {
return (
<div className="bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg transition cursor-pointer border border-gray-700">
<h3 className="text-lg font-semibold text-white mb-1">{playlist.name}</h3>
<p className="text-sm text-gray-400">{playlist.description || 'No description'}</p>
</div>
)
}