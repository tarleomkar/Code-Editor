import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import EditerPage from './pages/EditerPage'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
      <div>
        <Toaster
          position="top-right"
          toastOptions={{
            success: {
              theme: {
                primary: '#4aed88',
              },
            },
          }}
        ></Toaster>
      </div>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/editor/:roomId' element={<EditerPage />} />
      </Routes>
    </>
  )
}

export default App;


//  "server:dev": "nodemon server.js",
// "server:prod": "node server.js",
