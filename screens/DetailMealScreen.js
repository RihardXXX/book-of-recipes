import { View, Text, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { useLayoutEffect } from "react";

const DetailMealScreen = ({route, navigation}) => {

    const { idMeals } = route.params;

    const meal = MEALS.find(meal => meal.id === idMeals);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: meal.title
        })
    }, [navigation, meal])


    return(
        <View>
            <Text>
                { meal.title }
            </Text>
        </View>
    )
}

export default DetailMealScreen;