//Favorites component for a gallery-like web application

import "../Styles/Favorites.css"

export default function Favorites ({ favoriteImage }){


    return (
        <>
        {favoriteImage.length === 0 ? 
        <div className="favorites-container no-image">There is no favorite image yet ...</div> :
        <div className="favorites-container">
            {favoriteImage.map(item => {
                return(
                    <img className="each-favorite-image" src={item} />
                )
            })}
        </div>}
        </>
    )
}