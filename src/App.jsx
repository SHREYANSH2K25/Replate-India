import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './componenets/Home/Home'
import Browse from './componenets/Browse/Browse'
import Post from './componenets/Post/Post'
import Dashboard from './componenets/Dashboard/Dashboard'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-teal-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/post" element={<Post />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
