import { View, Text, StyleSheet } from "react-native";

const List = ({data, style}) => {
    return data.map((item, index) => {
        return (
            <View key={item} style={[styles.rootItem, style]}>
                <Text>
                    {index + 1}. {item}
                </Text>
            </View>
        )
    })
};

export default List;

const styles = StyleSheet.create({
    rootItem: {
        borderWidth: 1,
        borderColor: '#6D7986',
        margin: 10,
        borderRadius: 3,
        padding: 5
    }
});