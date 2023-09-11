import { View, Text, TouchableOpacity } from 'react-native'

import { Feather } from '@expo/vector-icons'
import { Foundation } from '@expo/vector-icons'
import { Octicons } from '@expo/vector-icons'

function TabIcon({ name, isFocused, activeColor, inactiveColor }) {
    return (
        <View>
            {name === 'HomeNavigator' && (
                <Foundation
                    name="home"
                    size={24}
                    color={isFocused ? activeColor : inactiveColor}
                />
            )}
            {name === 'UserNavigator' && (
                <Feather
                    name="user"
                    size={24}
                    color={isFocused ? activeColor : inactiveColor}
                />
            )}
            {name === 'DiscoverNavigator' && (
                <Octicons
                    name="location"
                    size={24}
                    color={isFocused ? activeColor : inactiveColor}
                />
            )}
        </View>
    )
}

export default function BottomTabElement({
    route,
    label,
    navigation,
    isFocused,
    icon,
    activeColor,
    inactiveColor
}) {
    const onPress = () => {
        const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
        })

        if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true })
        }
    }

    const onLongPress = () => {
        navigation.emit({
            type: 'tabLongPress',
            target: route.key
        })
    }

    return (
        <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
                flex: 1,
                alignItems: 'center',
                borderColor: inactiveColor,
                borderTopWidth: 1,
                height: 90,
                paddingTop: 3
            }}
        >
            <TabIcon
                name={icon}
                isFocused={isFocused}
                activeColor={activeColor}
                inactiveColor={inactiveColor}
            />

            <Text
                style={{ color: isFocused ? activeColor : inactiveColor }}
                className={` mt-[-3] text-xs font-semibold`}
            >
                {label}
            </Text>
        </TouchableOpacity>
    )
}
