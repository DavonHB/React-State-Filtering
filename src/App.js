import { useState, useRef, useMemo } from 'react'

function App() {
  const [items, setItems] = useState([])
  const [query, setQuery] = useState('')
  const inputRef = useRef()

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      return item.toLowerCase().includes(query.toLowerCase())
  })}, [items, query])

  function onSubmit(e) {
    e.preventDefault()

    const value = inputRef.current.value
    if (value === '') return
    setItems(previous => {
      return [...previous, value]
    })
    inputRef.current.value = ''
  }

  return (
   <>
   Search:
   <input value={query}  type="search" onChange={e => setQuery(e.target.value)} />

   <form onSubmit={onSubmit}>
    New Item: <input ref={inputRef} type="text" />
    <button type='submit'>Add</button>
   </form>
   <h3>Items:</h3>
   {filteredItems.map(item => (
    <div>{item}</div>
   ))}
   </>
  );
}

export default App;
