import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { useLayoutEffect } from "react";
import DetailMealInfo from '../components/DetailMealInfo';
import Subtitle from '../components/Subtitle';
import List from '../components/List';

const DetailMealScreen = ({route, navigation}) => {

    const { idMeals } = route.params;

    const meal = MEALS.find(meal => meal.id === idMeals);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: meal.title
        })
    }, [navigation, meal])


    return(
        <ScrollView style={styles.rootCard}>
            <Image 
                style={styles.imageStyle}
                source={{uri: meal.imageUrl}} 
            />
            <Text style={styles.title}>
                {meal.title}
            </Text>
            <View style={styles.detailBlock}>
                <DetailMealInfo 
                    duration={meal.duration}
                    complexity={meal.complexity}
                    styleText={styles.info}
                />
                <Subtitle>Ingredients</Subtitle>
                <List data={meal.ingredients} />
                <Subtitle>Steps</Subtitle>
                <List data={meal.steps} />
            </View>
        </ScrollView>
    )
}

export default DetailMealScreen;

const styles = StyleSheet.create({
    rootCard: {
        marginBottom: 30,
        backgroundColor: '#F3F4F5'
    },
    imageStyle: {
        width: '100%',
        height: 300,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 10
    },
    detailBlock: {
        marginHorizontal: 30
    },
    info: {
        fontSize: 16,
        color: '#58616c'
    }
});