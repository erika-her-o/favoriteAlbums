import React from "react";
import Home from "../containers/components/home/home";
import FavoriteAlbums from "../containers/components/albums/albumsFav";
import SocialNetworks from "../containers/components/social-networks/social-networks";
import {  Route } from "react-router-dom";

export default function Principal() {
    return (
        <div className="principal">
            <Route exact path="/" component={Home} />
            <Route path="/favoriteAlbums" component={FavoriteAlbums} />
            <Route path="/social" component={SocialNetworks} />
        </div>
    );
}