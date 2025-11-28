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