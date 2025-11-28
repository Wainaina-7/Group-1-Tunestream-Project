import React from 'react'


export default function SongCard({ song }) {
return (
<div className="">
<h3 className="">{song.name}</h3>
<p className="">{song.artists[0]?.name}</p>
</div>
)
}