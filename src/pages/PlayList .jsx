import React from 'react'

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
