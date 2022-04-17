import { FlatList, Text, View, StyleSheet } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealsList from "../components/mealList/MealsList";

const OverviewMeals = ({route, navigation}) => {

    const { categoryId } = route.params;

    // выбираем только те товары которые входятв эту категорию
    const mealsList = MEALS
        .filter(meal => meal.categoryIds
            .some(cat => cat === categoryId));
    
    // хук для работы с шаблоном jн быстрее чем просто эффект хук
    useLayoutEffect(() => {
        const titleNavigation = CATEGORIES.find(category => category.id === categoryId).title;

        // устанавливаем динамически заголовок для текущего роута
        navigation.setOptions({
            title: titleNavigation
        })
    }, [navigation, categoryId])


    return <MealsList data={mealsList} />
};

export default OverviewMeals;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 15
    }
})