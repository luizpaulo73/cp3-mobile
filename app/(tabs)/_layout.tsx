import { Tabs } from 'expo-router';
import { Image } from 'react-native';
import { useFonts, K2D_400Regular, K2D_700Bold } from "@expo-google-fonts/k2d";

export default function TabsLayout() {

    const [fontsLoaded] = useFonts({
        K2D_400Regular,
        K2D_700Bold,
      });
    
      if (!fontsLoaded) {
        return null;
      }

    return (
        <Tabs screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: "#020817" } }}>
            <Tabs.Screen
            name="dashboard"
            options={{
                title :"Dashboard", 
                
                tabBarIcon: ({ focused }) => (
                    <Image
                      source={require('../../assets/tabs/dashboard.png')}
                      style={{
                        width: 24,
                        height: 24,
                        tintColor: focused ? '#00CCCF' : '#94A3B8',}}
                    />
                ),
                tabBarLabelStyle: { color: "#94A3B8", fontSize: 9, fontFamily: "K2D_700Bold" }
            }}
            />
            <Tabs.Screen
            name="add"
            options={{
                title :"Add", 
                
                tabBarIcon: ({ focused }) => (
                    <Image
                      source={require('../../assets/tabs/add.png')}
                      style={{
                        width: 22,
                        height: 22,
                        tintColor: focused ? '#00CCCF' : '#94A3B8',}}
                    />
                ),
                tabBarLabelStyle: { color: "#94A3B8", fontSize: 9, fontFamily: "K2D_700Bold" }
            }}
            />
            <Tabs.Screen
            name="listar"
            options={{
                title :"Listar", 
                
                tabBarIcon: ({ focused }) => (
                    <Image
                      source={require('../../assets/tabs/lista.png')}
                      style={{
                        width: 24,
                        height: 14,
                        tintColor: focused ? '#00CCCF' : '#94A3B8',}}
                    />
                ),
                tabBarLabelStyle: { color: "#94A3B8", fontSize: 9, fontFamily: "K2D_700Bold" }
            }}
            />
            <Tabs.Screen
            name="desenvolvedor"
            options={{
                title :"Créditos", 
                
                tabBarIcon: ({ focused }) => (
                    <Image
                      source={require('../../assets/tabs/dev.png')}
                      style={{
                        width: 18,
                        height: 24,
                        tintColor: focused ? '#00CCCF' : '#94A3B8',}}
                    />
                ),
                tabBarLabelStyle: { color: "#94A3B8", fontSize: 9, fontFamily: "K2D_700Bold" }
            }}
            />
            
        </Tabs>
    )
}
