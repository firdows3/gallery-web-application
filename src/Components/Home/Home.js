// This React component represents a gallery-like web application.
// It displays categorized images with functionality to add, filter, favorite, and delete images.
// The component utilizes the Swiper library for a slider view.

import React, { useEffect, useState } from "react";
import "../Styles/home.css"
import add from "../Images/add.png"
import { Link } from "react-router-dom";

import favorited from "../Images/favorited.png"
import notFavorited from "../Images/notFavorited.png"
import deleteIcon from "../Images/delete.png"
import share from "../Images/share.png"
import education1 from "../Images/education1.jpg";
import education2 from "../Images/education2.jpg";
import nature1 from "../Images/nature1.jpg";
import art1 from "../Images/art1.jpg";
import art2 from "../Images/art2.jpg";
import religious1 from "../Images/religious1.jpg";
import religious2 from "../Images/religious2.jpg";
import religious3 from "../Images/religious3.jpg";
import nature2 from "../Images/nature2.jpg";
import nature3 from "../Images/nature3.jpg";
import nature4 from "../Images/nature4.jpg";
import nature5 from "../Images/nature5.jpg";
import nature6 from "../Images/nature6.jpg";
import art3 from "../Images/art3.jpg";
import art4 from "../Images/art4.jpg";
import art5 from "../Images/art5.jpg";
import art6 from "../Images/art6.jpg";


export default function Home ({ favoriteImage, setFavoriteImage }) {


    const [homeImages, setHomeImages] = useState([
        {
          id: 1,
          image: art1,
          category: 'Art'
        },
        {
          id: 2,
          image: art2,
          category: 'Art'
        },
        {
          id: 3,
          image: art3,
          category: 'Art'
        },
        {
          id: 4,
          image: art4,
          category: 'Art'
        },
        {
          id: 5,
          image: art5,
          category: 'Art'
        },
        {
          id: 6,
          image: art6,
          category: 'Art'
        },
        {
          id: 3,
          image: education1,
          category: 'Education'
        },
        {
          id: 4,
          image: education2, 
          category: 'Education'
        },
        {
          id: 5,
          image: nature1,
          category:'Nature'
        },
        {
          id: 6,
          image: religious1,
          category:'Religious'
        }
    ]);
      const [categories, setCategories] = useState([]);
      const [filteredImages, setFilteredImages] = useState(homeImages)
      const [activeCategory, setActiveCategory] = useState(-1)
      const [image, setImage] = useState('');
      const [category, setCategory] = useState('');

// filter the images based on their category
      const filterCategories = (category) => {
        const newCategory = homeImages.filter(eachCategory => eachCategory.category === category);
        console.log(newCategory);
        if (category === 'All'){
          setFilteredImages(homeImages);
        }
        else{
          setFilteredImages(newCategory)
        }
      }

//will update each category when ever a user adds an image
      const updateCategories = () => {
        const allCategories = ['All', ...new Set(homeImages.map(item => item.category))];
        setCategories(allCategories);
      };

      useEffect(() => {
       updateCategories();
      }, [homeImages])
      
      const handleImage = (event) =>{
        // input an image
        event.preventDefault();
        setImage(URL.createObjectURL(event.target.files[0]))
       }

       const handleCategory = (event) => {
        // input a category
        event.preventDefault();
        setCategory(event.target.value)
       }

       const handleSubmit = () => {
        // pushing both the image and the category to the home images array
        setHomeImages([{image: image, category: category}, ...homeImages])
        console.log(homeImages);
       } 

// using swiper for image sliding 
    useEffect(() => {
        const swiperStyle = document.createElement('link');
        swiperStyle.href = 'https://unpkg.com/swiper/swiper-bundle.min.css';
        swiperStyle.rel = 'stylesheet';
        document.head.appendChild(swiperStyle);
    
        const swiperScript = document.createElement('script');
        swiperScript.src = 'https://unpkg.com/swiper/swiper-bundle.min.js';
        swiperScript.async = true;
        swiperScript.onload = () => {
          new window.Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next', 
                prevEl: '.swiper-button-prev', 
            },
            breakpoints: {
                1250: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
                850: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                605: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
              },
            
          });
        };
        document.body.appendChild(swiperScript);
    
        return () => {
          document.head.removeChild(swiperStyle);
          document.body.removeChild(swiperScript);
        };
      }, []);


    return (
        <>
        <div className="home-container">
            <div className="home-top-moto">Capturing Life's Timeless Essence.</div>
            <div className="home-category-buttons">
              {
                //displaying the filtere categories
                categories.map((item, index) => {
                  console.log(item);
                  return <div className={activeCategory === index ? "home-filtered-button active-category" : "home-filtered-button"} 
                  onClick={()=>{
                    filterCategories(item);
                    setActiveCategory(index);
                  }}>
                    {item}
                  </div>
                })
              }
            </div>
            <div className="swiper-container">
                <div className="swiper-wrapper">
                {
                    filteredImages.map(item => {
                        return <Box item={item} homeImages={homeImages} setHomeImages={setHomeImages} favoriteImage={favoriteImage} setFavoriteImage={setFavoriteImage} />
                    })
                }
                </div>
                <div className="swiper-pagination"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
            <div className="home-add-image">
                <label className="add-image-label">
                    <div>Add image</div>
                    <input type="file" className="add-image-input" onChange={handleImage} />
                </label>
                <input className="add-image-input" type="text" placeholder="Add Category" onChange={handleCategory} />
                <div className="add-icon" onClick={handleSubmit}>+</div>
            </div>
        </div>
        </>
    )
}

//displaying each image 
function Box ({item, homeImages, setHomeImages, favoriteImage, setFavoriteImage}) {

    const [activeIcons, setActiveIcons] = useState(false)

    const handleDelete = (id) => {
// delete an image
        const tempImages = [...homeImages];
        const index = tempImages.findIndex(item => item.id === id);
        if (index < 0) return;
        tempImages.splice(index, 1);
        setHomeImages(tempImages);
       }

        const [active, setActive] = useState(false)

    return (
        <>
        <div className="swiper-slide" onMouseOver={() => setActiveIcons(true)} onMouseLeave={() => setActiveIcons(false)}>
            <img src={item.image} className="home-body-image" style={{height:300}} />
            {activeIcons?<div className="all-image-icons">
                <img className="eachImage-icon" src={active ? favorited : notFavorited} 
                onClick={() => {
                    setActive(!active)
                    active?  setFavoriteImage(favoriteImage) : setFavoriteImage([item.image, ...favoriteImage])
                }} />
                <img className="eachImage-icon"  src={share} />
                <img className="eachImage-icon" src={deleteIcon} onClick={() => handleDelete(item.id)} />
            </div>:<></>}
        </div>
        </>
    )
}