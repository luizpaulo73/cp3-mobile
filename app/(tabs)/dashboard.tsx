import { Text, View, StyleSheet } from 'react-native'
import { useFonts, K2D_400Regular, K2D_700Bold } from "@expo-google-fonts/k2d";
import CardsDashboard from '../../components/CardsDashboard/CardsDashboard';

export default function Dashboard() {

    const [fontsLoaded] = useFonts({
            K2D_400Regular,
            K2D_700Bold,
          });
        
          if (!fontsLoaded) {
            return null;
          }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>DashBoard</Text>
            <CardsDashboard />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    title: {
        fontFamily: "K2D_700Bold",
        fontSize: 24,
    }
})