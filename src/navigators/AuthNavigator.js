import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from '../screens/Auth/LoginScreen'
import RegisterScreen from '../screens/Auth/RegisterScreen'

const Stack = createStackNavigator()

export default function AuthNavigator() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false // Ocultar el header en todas las pantallas
        }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
    )
}
