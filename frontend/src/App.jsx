import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/login" element={<h1>login</h1>} />
      <Route path="/signup" element={<h1>signup</h1>} />
      <Route path="/search" element={<h1>Search</h1>} />
      <Route path="/add" element={<h1>Add recipe</h1>} />
      <Route path="/recipe/:recipeId" element={<h1>recipe page</h1>} />
      <Route path="/dashboard" element={<h1>dashboard</h1>} />
      <Route path="/*" element={<h1>404 no page</h1>} />

      

     </Routes>
    </div>
  )
}

export default App
