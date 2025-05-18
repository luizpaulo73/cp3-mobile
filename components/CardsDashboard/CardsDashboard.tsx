import { View, Text, Image, StyleSheet } from 'react-native'

export default function CardsDashboard() {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                    <View style={[styles.bordaImg, {backgroundColor: '#1e6adb'}]}>
                        <Image source={require('../../assets/icons/pacote.png')} style={styles.image} />
                    </View>
                    <Text style={styles.title}>Total de Itens</Text>
                </View>
                <Text style={styles.quantidade}>0</Text>
            </View>
            <View style={styles.card}>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                    <View style={[styles.bordaImg, {backgroundColor: '#3edb1e'}]}>
                        <Image source={require('../../assets/icons/carrinho.png')} style={styles.image} />
                    </View>
                    <Text style={styles.title}>Valor Total</Text>
                </View>
                <Text style={styles.quantidade}>R$0.00</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
        gap: 5,
        
    },
    image: {
        width: 20,
        height: 20,
    }, 
    bordaImg: {
        padding: 20,
        borderRadius: 9999,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: "47%",
        padding: 10
    },
    title: {
        fontFamily: "K2D_700Bold"
    },
    quantidade: {
        fontFamily: "K2D_700Bold",
        fontSize: 24,
        textAlign: 'center',
    }
})