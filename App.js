import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import AuthNavigator from './src/navigators/AuthNavigator'
import RootNavigator from './src/navigators/RootNavigator'

// const Tab = createBottomTabNavigator();

// This navigator handles login/root and other not tabs navs
const Stack = createStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            {/* <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="HomeNavigator" component={HomeNavigator} />
                <Tab.Screen name="UserNavigator" component={UserNavigator} />
            </Tab.Navigator> */}

            <Stack.Navigator initialRouteName='RootNavigator' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="RootNavigator" component={RootNavigator} />
                <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
