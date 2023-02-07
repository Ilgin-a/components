import logo from './logo.svg';
import './App.css';

import Header from "./components/Header/Header";

import AnaSayfa from "./pages/AnaSayfa/AnaSayfa";
import Hakkinda from "./pages/Hakkinda/Hakkinda";
import Kontak from "./pages/Kontak/Kontak";

import Iletisim from './pages/Iletisim/Iletisim';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<AnaSayfa />} />
          <Route path="/hakkinda" element={<Hakkinda />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/iletisim" element={<Iletisim />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;
