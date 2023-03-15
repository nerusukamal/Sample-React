import React from "react";
import PageTitle from "../../_shared/PageTitle/PageTitle";
import MovieCardDesktop from "../../_shared/MovieCardDesktop/MovieCardDesktop";
import MovieCardMobile from '../../_shared/MovieCardMobile/MovieCardMobile'
import "./FavoriteCard.css"
const Favorites = () => {
const favoriteList = JSON.parse(localStorage.getItem("favoritesList")) || [];
return(
<React.Fragment>
<PageTitle>Favorites</PageTitle>
<div className="fav-list-container">
        <div className="no-fav-added">
        {favoriteList.length === 0 && <h4>No favorites added</h4>} 
        </div>
        <div className="fav-list-desktop">
        {favoriteList.length > 0 && favoriteList.map((item) => {
          return <MovieCardDesktop movieListItem={item} key={item.id} />;
        })}
        </div>
        <div className="fav-list-mobile">
        {favoriteList.length > 0 && favoriteList.map((item) => {
          return <MovieCardMobile movieListItem={item} key={item.id} />;
        })}
        </div>
      </div>
</React.Fragment>
)
}
export default Favorites