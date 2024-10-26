import { router } from "expo-router";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from "react-native";

export default function User() {
    return (
        <View style={styles.container}>
            <Text>Dados do Usuário</Text>
            <TouchableOpacity
                // onPress={validate}
                onPress={() => router.push('../index')}
            >
                <Text>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})