import { StyleSheet, Text, View } from "react-native";

interface AltTextComponentProps {
    ticker: string;
}

export const AltTextComponent: React.FC<AltTextComponentProps> = ({ ticker }) => {
    return (
        <View style={styles.textBox}>
            <Text style={styles.altText}>{ticker}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    altText: {
        color: '#fff',
        fontSize: 12,

    },
    textBox: {
        backgroundColor: '#1F1F1F',
        borderWidth: 1,
        borderRadius: 5,
        // create border color dark grey
        borderColor: '#333',
        padding: 10,
        marginVertical: 10,         // Add margin for spacing

    },
});