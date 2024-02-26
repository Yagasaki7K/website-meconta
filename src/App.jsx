import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import SignUpPlus from './pages/SignUpPlus'
import SignUpLess from './pages/SignUpLess'
import SignUpCategories from './pages/SignUpCategories'
import ReadCosts from './pages/ReadCosts'
import HelpMe from './pages/HelpMe'
import Home from './pages/Home'
import Status from './pages/Status'
import './index.css'

function App() {

    return (
        <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/dashboard" element={<Dashboard />} exact />
            <Route path="/status" element={<Status />} exact />
            <Route path="/categorias" element={<SignUpCategories />} exact />
            <Route path="/entrada" element={<SignUpPlus />} exact />
            <Route path="/saida" element={<SignUpLess />} exact />
            <Route path="/gastos" element={<ReadCosts />} exact />
            <Route path="/ajuda" element={<HelpMe />} exact />

        </Routes>
    )
}

export default App
