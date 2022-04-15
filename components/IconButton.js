import { Pressable, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

const IconButton = ({name, color, size, onPress, style}) => {
    return (
        <Pressable 
            onPress={onPress}
            style={({pressed}) => [style, pressed && styles.pressed]}
        >
            <Ionicons 
                name={name}
                color={color}
                size={size} 
            />
        </Pressable>
    )
};

export default IconButton;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.5
    }
});