import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeNavigator from './src/navigators/HomeNavigator'
import UserNavigator from './src/navigators/UserNavigator'

const Tab = createBottomTabNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="HomeNavigator" component={HomeNavigator} />
                <Tab.Screen name="UserNavigator" component={UserNavigator} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
