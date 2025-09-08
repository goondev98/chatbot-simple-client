import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Conversation from './components/Conversation'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Conversation />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
