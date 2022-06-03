import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Disease from '../pages/Disease';
import SkinCancer from '../pages/SkinCancer';
import Covid from '../pages/CovidPred';
import BrainTumor from '../pages/BrainTumor';
import Chat from '../pages/Chat';
import Footer from '../components/Footer';

export default function Main() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/disease" element={<Disease />} />
                <Route path="/skinCancer" element={<SkinCancer />} />
                <Route path="/covid" element={<Covid />} />
                <Route path="/brainTumor" element={<BrainTumor />} />
                <Route path="/chat" element={<Chat />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
