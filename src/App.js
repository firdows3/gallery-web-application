import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react"

import Favorites from "./Components/others/Favorites";
import Header from "./Components/header&footer/Header";
import Footer from "./Components/header&footer/Footer";
import Home from "./Components/Home/Home";
import Blog from "./Components/others/Blog";


function App() {
  const [isFavorite, setIsFavorite] = useState(false)
 
  const [favoriteImage, setFavoriteImage] = useState([]);

  useEffect(() => {
    console.log(favoriteImage);
}, [favoriteImage, isFavorite])

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/">
            <Route index element={<Home setFavoriteImage={setFavoriteImage} favoriteImage={favoriteImage} />}/>
          </Route>
          <Route path="favorites" element={<Favorites favoriteImage={favoriteImage} />} />
          <Route path="blog" element={<Blog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
