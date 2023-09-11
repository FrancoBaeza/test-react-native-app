import { useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Pressable
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import Svg, { Path } from 'react-native-svg'

export default function SectionsSelector({ options, onPress }) {
    const [selectedIndex, setSelectedIndex] = useState(0)

    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            className={`mt-[20] flex-row pl-[20] border-b-[1px] border-gray-300`}
        >
            {options.map((option, index) => (
                <Pressable
                    onPress={() => {
                        setSelectedIndex(index)
                        onPress(index)
                    }}
                    key={option.name}
                    className={` h-[30] pr-[15]`}
                >
                    <Text className={` flex-[6] text-sm font-semibold`}>
                        {option.name}
                    </Text>

                    {/* Underline */}
                    <View
                        className={`flex-[2] rounded-sm w-[100%] ${
                            selectedIndex == index
                                ? 'bg-blue-700'
                                : 'transparent'
                        }`}
                    ></View>
                </Pressable>
            ))}
        </ScrollView>
    )
}
