
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Navbar />

            <div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    {/* Add more routes here as needed */}
                </Routes>

            </div>


        </div>
    )
}

export default App
