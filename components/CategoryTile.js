import { View, Text, Pressable, StyleSheet, Platform } from 'react-native';

const CategoryTile = ({title, color, onPress}) => {
    return (
        <View style={styles.tile}>
            <Pressable
                style={({pressed}) => [styles.button, pressed && styles.buttonPress]} 
                android_ripple={{color: '#B6BCC3'}}
                onPress={onPress}
            >
                <View style={[styles.tileContent, { backgroundColor: color }]}>
                    <Text style={styles.text}>
                        {
                            title
                        }
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryTile;

const styles = StyleSheet.create({
    tile: {
        flex: 1,
        minHeight: 150,
        margin: 10,
        borderRadius: 10,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    button: {
        flex: 1,
        borderRadius: 10,
    },
    buttonPress: {
        backgroundColor: '#B6BCC3',
        opacity: 0.4,
        // borderRadius: 10,
    },
    tileContent: {
        flex: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})