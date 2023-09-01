import 'react-native-gesture-handler'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeNavigator from './HomeNavigator'
import UserNavigator from './UserNavigator'

const Tab = createBottomTabNavigator();

export default function RootNavigator() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="HomeNavigator" component={HomeNavigator} />
            <Tab.Screen name="UserNavigator" component={UserNavigator} />
        </Tab.Navigator>
    )
}
