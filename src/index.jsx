import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles.css'

const { document } = globalThis

ReactDOM.render(<App />, document.getElementById('app'))
