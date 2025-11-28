import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div>
      <header className="">
<nav className="">
<h1 className="">Tunestream</h1>
<ul className="">
<li><Link className="" to="/">Home</Link></li>
<li><Link className="" to="/search">Search</Link></li>
<li><Link className="" to="/playlists">Playlists</Link></li>
<li><Link className="" to="/create">Create</Link></li>
<li><Link className="" to="/login">Login</Link></li>
</ul>
</nav>
</header>
    </div>
  )
}
