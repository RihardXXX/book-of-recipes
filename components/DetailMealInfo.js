import { View, Text, StyleSheet } from 'react-native';

const DetailMealInfo = ({duration, complexity, style, styleText}) => {
    return (
        <View style={[styles.detailBlock, style]}>
            <Text style={[styles.textStyle, styleText]}>
                {duration}min
            </Text>
            <Text style={[styles.textStyle, styleText]}>
                {complexity}
            </Text>
        </View>
    )
}

export default DetailMealInfo;

const styles = StyleSheet.create({
    detailBlock: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        fontSize: 15,
        padding: 10,
    },
    textStyle: {
        fontWeight: '400'
    }
})