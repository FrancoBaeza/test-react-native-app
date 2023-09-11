import { View, Text, TouchableOpacity } from 'react-native'

import BottomTabElement from './BottomTabElement'

export default function BottomTabBar({ state, descriptors, navigation }) {

    return (
        <View style={{ flexDirection: 'row', height: 40, backgroundColor: "#F7F8F9" }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key]
                const label = options.tabBarLabel ? options.tabBarLabel : route.name;
                const isFocused = state.index === index

                return (
                    <BottomTabElement
                        key={index} 
                        label={label}
                        route={route}
                        navigation={navigation}
                        isFocused={isFocused}
                        icon={route.name}
                        activeColor={options.activeColor}
                        inactiveColor={options.inactiveColor}
                    /> 
                )
            })}
        </View>
    )
}
