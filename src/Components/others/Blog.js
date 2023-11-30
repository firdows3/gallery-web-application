//blog posted by the user for a gallery-like web application


import "../Styles/Blog.css"
import art4 from "../Images/art4.jpg";
import art5 from "../Images/art5.jpg";
import art1 from "../Images/art1.jpg";
import art2 from "../Images/art2.jpg";
import add from "../Images/add.png"
import { useState } from "react";


export default function Blog () {

    // the array displayed in a blog containing an image and its description
    const [blogImages, setBlogImages] = useState([
        {
            image: art4,
            description: "A vibrant painting depicting a sunlit coastal scene with crashing waves, golden sands, and a solitary sailboat. The vivid colors evoke a sense of tranquility and vastness in nature."
        },
        {
            image: art5,
            description: "A black-and-white photograph capturing the silhouette of a lone figure standing on a cliff's edge, gazing at the expansive, star-filled sky, evoking a profound sense of introspection and wonder."
        },
    ])
    const [active, setActive] = useState(false);
    const [images, setImages] = useState([]);
    const [description, setDescription] = useState('');

    const handleImage = (event) =>{
        // input image 
        event.preventDefault();
        setImages(URL.createObjectURL(event.target.files[0]), ...images)
       }

    const handleDescription = (event) => {
        // input description
        event.preventDefault();
        setDescription(event.target.value)
    }

    const handleSubmit = (event) => {
        // pushing the description and the image to the array
        setBlogImages([{image: images, description: description}, ...blogImages]);
    }

    return(
        <>
        <div className="blog-container">
            <div className="blog-buttons">
                <div className="add-blog-button" onClick={() => setActive(true)}>Add Blog</div>
                {active ? <div className="add-blog-button" 
                onClick={() => {
                    setActive(false)
                    handleSubmit()
                }
                }>Add</div>: <></>}
            </div>
            {active ?
            <> 
            <div className="each-blog-container">
                <div className="blog-add-image">
                    <label>
                        <img src={add} className="blog-add-image-icon" />
                        <div>Add image</div>
                        <input type="file" className="add-image-input" onChange={handleImage} />
                    </label>
                </div>
                <textarea className="blog-input-description" placeholder="Add your description for the image ..." onChange={handleDescription}/>
            </div>
            </> : <></>
            }
            {
                blogImages.map(item => {
                    return(
                        <>
                        <div className="each-blog-container">
                            <img src={item.image} className="blog-image" />
                            <div className="blog-description">{item.description.length <= 30 ? item.description : item.description.substring(0, 300) + "..."}</div>
                        </div>
                        </>
                    )
                })
            }
        </div>
        </>
    )
}