import { View, Text, Pressable, StyleSheet, Image, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MealItem = ({
    id,
    title,
    imageUrl,
    duration,
    complexity,
}) => {

    const navigation = useNavigation();

    // переход на страницу детального осмотра продукта
    const routeDetailMeal = () => {
        navigation.navigate('DetailMealScreen', {
            idMeals: id
        })
    }

    return (
        <View style={styles.rootContainer}>
            <Pressable
                style={({pressed}) => pressed && styles.buttonPress} 
                android_ripple={{color: '#B6BCC3'}}
                onPress={routeDetailMeal}
            >
                <View style={styles.innerContainer}>
                    <View style={styles.imageBlock}>
                        <Image 
                            style={styles.image}
                            source={{uri: imageUrl}} 
                        />
                        <Text style={styles.title}>
                            {title}
                        </Text>
                    </View>
                    <View style={styles.detailBlock}>
                        <Text>
                            {duration}min
                        </Text>
                        <Text>
                            {complexity}
                        </Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        margin: 15,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },  
    buttonPress: {
        backgroundColor: '#B6BCC3',
        opacity: 0.7,
        borderRadius: 8,
    },
    image: {
        height: 200,
        width: '100%',
    },
    imageBlock: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 10,
    },
    detailBlock: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        fontSize: 15,
        padding: 10
    }
})