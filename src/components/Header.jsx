import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div>
      <header className="bg-gray-800 shadow-lg">
<nav className="max-w-6xl mx-auto p-4 flex items-center justify-between">
<h1 className="text-3xl font-bold text-green-400">Tunestream</h1>
<ul className="flex gap-6 text-lg">
<li><Link className="hover:text-green-400" to="/">Home</Link></li>
<li><Link className="hover:text-green-400" to="/search">Search</Link></li>
<li><Link className="hover:text-green-400" to="/playlists">Playlists</Link></li>
<li><Link className="hover:text-green-400" to="/create">Create</Link></li>
<li><Link className="hover:text-green-400" to="/login">Login</Link></li>
</ul>
</nav>
</header>
    </div>
  )
}
