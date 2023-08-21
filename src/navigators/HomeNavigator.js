import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screens/Home/HomeScreen';
import StoresScreen from '../screens/Home/StoresScreen';

const Stack = createStackNavigator()

export default HomeNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false // Ocultar el header en todas las pantallas
        }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Stores" component={StoresScreen} />
        </Stack.Navigator>
    )
}
