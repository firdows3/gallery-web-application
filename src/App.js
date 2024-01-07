import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react"

import Favorites from "./Components/others/Favorites";
import Header from "./Components/header&footer/Header";
import Footer from "./Components/header&footer/Footer";
import Home from "./Components/Home/Home";
import Blog from "./Components/others/Blog";

import education1 from "./Components/Images/education1.jpg";
import education2 from "./Components/Images/education2.jpg";
import nature1 from "./Components/Images/nature1.jpg";
import art1 from "./Components/Images/art1.jpg";
import art2 from "./Components/Images/art2.jpg";
import religious1 from "./Components/Images/religious1.jpg";
import religious2 from "./Components/Images/religious2.jpg";
import religious3 from "./Components/Images/religious3.jpg";
import nature2 from "./Components/Images/nature2.jpg";
import nature3 from "./Components/Images/nature3.jpg";
import nature4 from "./Components/Images/nature4.jpg";
import nature5 from "./Components/Images/nature5.jpg";
import nature6 from "./Components/Images/nature6.jpg";
import art3 from "./Components/Images/art3.jpg";
import art4 from "./Components/Images/art4.jpg";
import art5 from "./Components/Images/art5.jpg";
import art6 from "./Components/Images/art6.jpg";
import "./App.css"
import AddImage from "./Components/Home/AddImage";


function App() {

  const [homeImages, setHomeImages] = useState([
    {
      id: 1,
      image: art1,
      category: 'Art',
      isFavoriteImage: false
    },
    {
      id: 2,
      image: art2,
      category: 'Art',
      isFavoriteImage: false
    },
    {
      id: 3,
      image: art3,
      category: 'Art',
      isFavoriteImage: false
    },
    {
      id: 4,
      image: art4,
      category: 'Art',
      isFavoriteImage: false
    },
    {
      id: 5,
      image: art5,
      category: 'Art',
      isFavoriteImage: false
    },
    {
      id: 6,
      image: art6,
      category: 'Art',
      isFavoriteImage: false
    },
    {
      id: 7,
      image: education1,
      category: 'Education',
      isFavoriteImage: false
    },
    {
      id: 8,
      image: education2, 
      category: 'Education',
      isFavoriteImage: false
    },
    {
      id: 9,
      image: nature1,
      category:'Nature',
      isFavoriteImage: false
    },
    {
      id: 10,
      image: religious1,
      category:'Religious',
      isFavoriteImage: false
    }
]);

      const [category, setCategory] = useState('');
      const [image, setImage] = useState('');
 

const favorites = homeImages.filter(item => item.isFavoriteImage === true)
const [favoriteImage, setFavoriteImage] = useState(favorites)



  useEffect(() => {
    setFavoriteImage(favorites)
    console.log(favoriteImage);
}, [homeImages])

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/">
            <Route index element={<Home favoriteImage={favoriteImage} homeImages={homeImages} setHomeImages={setHomeImages} image={image} setImage={setImage} category={category} setCategory={setCategory} />}/>
          </Route>
          <Route path="favorites" element={<Favorites favoriteImage={favoriteImage} />} />
          <Route path="blog" element={<Blog />} />
          <Route path="addImage" element={<AddImage image={image} homeImages={homeImages} setHomeImages={setHomeImages} setImage={setImage} category={category} setCategory={setCategory} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
