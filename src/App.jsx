import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom/BrowserRouter';
import Home from './pages/Home';
import Artist from './pages/Artist';
import Artists from './pages/Artists';
import Song from './pages/Song';
import Songs from './pages/Songs';


const App = () => {
  return (

    <BrowserRouter>

      <Header />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/artists" element={<Artists />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/song" element={<Song />} />

        <Main />

      </Routes>

    </BrowserRouter>
  )
}

export default App;
