import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

console.log(App)

console.log(<App />)

const htmlElement = document.getElementById('root')

const root = ReactDOM.createRoot(htmlElement)
root.render(<App />)
