import React, { useEffect, useState } from "react";
import "../Styles/home.css"
import add from '../Images/add.png'

import favorited from "../Images/favorited.png"
import notFavorited from "../Images/notFavorited.png"
import deleteIcon from "../Images/delete.png"
import share from "../Images/share.png"
import { Link } from "react-router-dom";
import AddImage from "./AddImage";


export default function Home ({ favoriteImage, setFavoriteImage, homeImages, setHomeImages, image, setImage, category, setCategory }) {

      const [categories, setCategories] = useState([]);
      const [filteredImages, setFilteredImages] = useState(homeImages)
      const [activeCategory, setActiveCategory] = useState(0)


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

       useEffect(()=>{
        setFilteredImages(homeImages)
       }, [homeImages])

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
            initialSlide: 0,
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
        console.log(swiperScript);
    
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
                    filteredImages.map((item, index) => {
                        return <Box item={item} homeImages={homeImages} setHomeImages={setHomeImages} favoriteImage={favoriteImage} setFavoriteImage={setFavoriteImage} />
                    })
                }
                </div>
                <div className="swiper-pagination"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
            <div className="home-add-icon-container">
              <Link to='addImage'><img src={add} className="add-image-icon" /></Link>
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

    const favorites = () => {
      const isFavorite = homeImages.map(img => {
        if (img.id === item.id){
          return {...img, isFavoriteImage: !img.isFavoriteImage}
        }
        else return img
      })

      setHomeImages(isFavorite)
    }

    return (
        <>
        <div className="swiper-slide" onMouseOver={() => setActiveIcons(true)} onMouseLeave={() => setActiveIcons(false)}>
            <img src={item.image} className="home-body-image" style={{height:300}} />
            {activeIcons?<div className="all-image-icons">
                <img className="eachImage-icon" src={item.isFavoriteImage ? favorited : notFavorited} 
                onClick={favorites} />
                <img className="eachImage-icon"  src={share} />
                <img className="eachImage-icon" src={deleteIcon} onClick={() => handleDelete(item.id)} />
            </div>:<></>}
        </div>
        </>
    )
}