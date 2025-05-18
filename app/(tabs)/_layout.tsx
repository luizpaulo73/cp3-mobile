import { Tabs } from 'expo-router'
import { Image } from 'react-native'

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen
            name="mapa"
            options={{
                title :"Mapa", 
                
                tabBarIcon: ({ focused }) => (
                    <Image
                      source={require('../../assets/tabs/add.png')}
                      style={{
                        width: 24,
                        height: 24,
                        tintColor: focused ? '#00CCCF' : '#94A3B8',}}
                    />
                ),
                tabBarLabelStyle: { color: "#94A3B8", fontSize: 10, fontFamily: "K2D_700Bold" }
            }}
            />
            <Tabs.Screen
            name="mapa"
            options={{
                title :"Mapa", 
                
                tabBarIcon: ({ focused }) => (
                    <Image
                      source={require('../../assets/tabs/lista.png')}
                      style={{
                        width: 24,
                        height: 24,
                        tintColor: focused ? '#00CCCF' : '#94A3B8',}}
                    />
                ),
                tabBarLabelStyle: { color: "#94A3B8", fontSize: 10, fontFamily: "K2D_700Bold" }
            }}
            />
        </Tabs>
    )
}
