import { View, Text, Pressable } from 'react-native';

const CategoryTile = ({title, color}) => {
    return (
        <View>
            <Pressable>
                <View>
                    <Text>
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