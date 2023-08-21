import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import UserScreen from '../screens/User/UserScreen'

const Stack = createStackNavigator()

export default HomeNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false // Ocultar el header en todas las pantallas
            }}
        >
            <Stack.Screen name="User" component={UserScreen} />
        </Stack.Navigator>
    )
}
