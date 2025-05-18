import { Link } from 'expo-router'
import { View, Text, StyleSheet } from 'react-native'

export default function TelaInicial() {
    return (
        <View style={styles.container}>
            <Text>
                Bem-vindo ao aplicativo de gerenciamento de estoque!
            </Text>
            <Link href={"/dashboard"}>Entrar</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})