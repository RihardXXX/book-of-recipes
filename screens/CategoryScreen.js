import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";
import CategoryTile from "../components/CategoryTile";

const CategoryScreen = ({navigation}) => {


    const changeRoute = (id) => {
        navigation.navigate('OverviewMeals', {
            categoryId: id
        });
    };

    const renderCategoryItem = ({item}) => {
        
        return <CategoryTile 
                    title={item.title}
                    color={item.color} 
                    onPress={() => changeRoute(item.id)}
                />
    };

    return (
        <FlatList 
            data={CATEGORIES}
            keyExtractor={item => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    )
}

export default CategoryScreen;