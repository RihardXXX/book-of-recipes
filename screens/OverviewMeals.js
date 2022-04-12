import { FlatList, Text, View, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const OverviewMeals = ({route}) => {

    const { categoryId } = route.params;

    const mealsList = MEALS
        .filter(meal => meal.categoryIds
            .some(cat => cat === categoryId));

    const renderMealsItem = ({item}) => {
        return <MealItem {...item}/>
    };        


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