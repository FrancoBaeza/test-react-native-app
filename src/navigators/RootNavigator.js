import 'react-native-gesture-handler'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeNavigator from './HomeNavigator'
import UserNavigator from './UserNavigator'
import DiscoverNavigator from './DiscoverNavigator'
import BottomTabBar from '../components/bottomTab/BottomTabBar'

const Tab = createBottomTabNavigator()

export default function RootNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false, inactiveColor: "#a2a5a6", activeColor: "#1d4ed8", }}
            tabBar={props => <BottomTabBar {...props} />}
        >
            <Tab.Screen
                options={{
                    tabBarAccessibilityLabel: 'Home',
                    tabBarLabel: 'Home',
                }}
                name="HomeNavigator"
                component={HomeNavigator}
            />
            <Tab.Screen
                options={{
                    tabBarAccessibilityLabel: 'Descrubrir',
                    tabBarLabel: 'Descrubrir',
                }}
                name="DiscoverNavigator"
                component={DiscoverNavigator}
            />
            <Tab.Screen
                options={{
                    tabBarAccessibilityLabel: 'User',
                    tabBarLabel: 'User',
                }}
                name="UserNavigator"
                component={UserNavigator}
            />
        </Tab.Navigator>
    )
}


