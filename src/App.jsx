import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Search from './pages/Search'
import Playlists from './pages/Playlists'
import CreatePlaylist from './pages/CreatePlaylist'
import Login from './pages/Login'

export default function App() {
return (
<div className="">
<Header />
<div className="">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/search" element={<Search />} />
<Route path="/playlists" element={<Playlists />} />
<Route path="/create" element={<CreatePlaylist />} />
<Route path="/login" element={<Login />} />
</Routes>
</div>
</div>
)
}