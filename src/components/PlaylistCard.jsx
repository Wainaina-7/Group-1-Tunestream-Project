import React from 'react'

export default function PlaylistCard({ playlist }) {
return (
<div className="">
<h3 className="">{playlist.name}</h3>
<p className="">{playlist.description || 'No description'}</p>
</div>
)
}