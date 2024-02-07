import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import './index.css'

function App() {

    return (
        <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/dashboard" element={<Dashboard />} exact />
        </Routes>
    )
}

export default App
