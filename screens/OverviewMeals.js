import { FlatList, Text, View, StyleSheet } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

const OverviewMeals = ({route, navigation}) => {

    const { categoryId } = route.params;

    // выбираем только те товары которые входятв эту категорию
    const mealsList = MEALS
        .filter(meal => meal.categoryIds
            .some(cat => cat === categoryId));

    const renderMealsItem = ({item}) => {
        return <MealItem 
                    {...item} 
               />
    };     
    
    // хук для работы с шаблоном jн быстрее чем просто эффект хук
    useLayoutEffect(() => {
        const titleNavigation = CATEGORIES.find(category => category.id === categoryId).title;

        // устанавливаем динамически заголовок для текущего роута
        navigation.setOptions({
            title: titleNavigation
        })
    }, [navigation, categoryId])


    return (
        <FlatList 
            data={mealsList}
            keyExtractor={item => item.id}
            renderItem={renderMealsItem}
        />
    )
};

export default OverviewMeals;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 15
    }
})