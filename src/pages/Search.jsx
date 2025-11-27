export default function Search() {
const [query, setQuery] = useState('')
const [results, setResults] = useState([])
return(
    <div>
        <h2 className="">Search Music</h2>
<input
className=""
placeholder="Search tracks..."
value={query}
onChange={e => setQuery(e.target.value)}
/>
    </div>
)
}