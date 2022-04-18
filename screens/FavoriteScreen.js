import { View, Text, StyleSheet } from "react-native";
import MealsList from "../components/mealList/MealsList";
import { MEALS } from "../data/dummy-data";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context"
import { useSelector } from "react-redux";

const FavoriteScreen = () => {
    const { ids } = useContext(FavoritesContext);

    const favoritesIds = useSelector(state => state.favoriteMeals.ids)

    // const favoritesMeals = MEALS.filter(meal => ids.includes(meal.id));
    const favoritesMeals = MEALS.filter(meal => favoritesIds.includes(meal.id));

    if (!favoritesMeals.length) {
        return(
            <View style={styles.rootContainer}>
                <Text style={styles.infoText}>
                    not favorite meals opps
                </Text>
            </View>
        )
    }

    return <MealsList data={favoritesMeals} />
};

export default FavoriteScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    infoText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
})