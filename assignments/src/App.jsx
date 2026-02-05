import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar"
import First from "./01_first/App"
import Second from "./02_first/App"
import Third from "./03_first/App"
import Fourth from "./04_first/App"
import Fifth from "./05_first/App"

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<h2>Assignments Home</h2>} />
        <Route path="/first" element={<First />} />
        <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third />} />
        <Route path="/fourth" element={<Fourth />} />
        <Route path="/fifth" element={<Fifth />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
