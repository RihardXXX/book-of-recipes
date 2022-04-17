import { FlatList } from "react-native";
import MealItem from "./MealItem";

const MealsList = ({data}) => {

    const renderMealsItem = ({item}) => {
        return <MealItem 
                    {...item} 
               />
    };     

    return (
        <FlatList 
            data={data}
            keyExtractor={item => item.id}
            renderItem={renderMealsItem}
        />
    )
}

export default MealsList;