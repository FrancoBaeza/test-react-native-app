import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import DiscoverScreen from '../screens/Discover/DiscoverScreen';

const Stack = createStackNavigator()

export default DiscoverNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false // Ocultar el header en todas las pantallas
        }}>
            <Stack.Screen name="Discover" component={DiscoverScreen} />
        </Stack.Navigator>
    )
}
