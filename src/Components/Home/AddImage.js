import { useNavigate } from "react-router-dom";


export default function AddImage ({ image, setImage, setCategory, category, homeImages, setHomeImages }){

    const navigate = useNavigate()
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
        category.length === 0 ? alert('add category') : setHomeImages([{image: image, category: category}, ...homeImages])
        console.log(homeImages);
        setImage('');
        setCategory('');
        navigate(-1)
       } 

    return(
        <>
        <div className="add-image-container">
        {image == '' ? <></> : 
            <div className="add-image-picture-container">
                <img src={image} className="add-image-picture"/>
            </div>}
            <div className="home-add-image">
                <label className="add-image-label">
                    <div>Add image</div>
                    <input type="file" className="add-image-input" onChange={handleImage} />
                </label>
                <select className="add-image-input" onChange={handleCategory}>
                  <option>Add category</option>
                  <option value='Art'>Art</option>
                  <option value='Nature'>Nature</option>
                  <option value='Education'>Education</option>
                  <option value='Religious'>Religious</option>
                </select>
                <div className="add-icon" onClick={handleSubmit}>+</div>
            </div>
        </div>
        </>
    )
}