import { View, Text, StyleSheet } from "react-native";

const Subtitle = ({children, style, styleText}) => {
    return (
        <View style={[styles.rootContainer, style]}>
            <Text style={[styles.textContainer, styleText]}>
                {
                    children
                }
            </Text>
        </View>
    )
}

export default Subtitle;

const styles = StyleSheet.create({
    rootContainer: {
        padding: 10,
        borderBottomColor: '#58616c',
        borderBottomWidth: 2,
        margin: 5
    },
    textContainer: {
        fontSize: 20,
        color: '#58616c',
        textAlign: 'center',
        fontWeight: 'bold'
    }
})