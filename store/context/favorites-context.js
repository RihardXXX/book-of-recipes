import { createContext, useState } from "react";

const FavoritesContext = createContext({
    ids: [],
    addFavorite: id => {},
    removeFavorite: id => {}
});

const FavoritesContextProvider = ({children}) => {

    const [favoritesId, setFavoritesId] = useState([]);

    const addFavoriteId = id => {
        setFavoritesId(oldFavoriteId => [...oldFavoriteId, id]);
    }

    const removeFavoriteId = id => {
        setFavoritesId(oldFavoriteId => oldFavoriteId.filter(itemId => itemId !== id));
    }

    const value = {
        ids: favoritesId,
        addFavoriteId: addFavoriteId,
        removeFavorite: removeFavoriteId
    }
 
    return (
        <FavoritesContext.Provider value={value}>
            {
                children
            }
        </FavoritesContext.Provider>
    )
};

export {
    FavoritesContext,
    FavoritesContextProvider
}
