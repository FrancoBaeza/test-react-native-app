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
import { Feather, FontAwesome5 } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

import SectionsSelector from '../../components/discover/SectionsSelector'
import { useRef, useState } from 'react'
import ShopCard from '../../components/discover/ShopCard'

export default function DiscoverScreen() {
    const options = [
        {
            name: 'Mejores',
            selected: true
        },
        {
            name: 'En tendencia',
            selected: false
        },
        {
            name: 'Mas cercanos',
            selected: false
        }
    ]

    // const scrollRef = useRef(null)
    const [scrollMeasures, setScrollMeasures] = useState([])
    const scrollRef = useRef();

    const sectionSelect = (index) => {
        console.log('index: ', index)
        console.log('scrollMeasures[index]: ', scrollMeasures[index])

        // scroll to section
        scrollRef.current.scrollTo({
            y: scrollMeasures[index],
            animated: true
        })
    }

    return (
        <SafeAreaView className={`flex flex-col bg-slate-100`}>
            {/* Header */}
            <View className={`pt-[20] items-center`}>
                <Text className={` tracking-wider font-semibold text-2xl`}>
                    Descubrir
                </Text>
            </View>

            {/* Search input */}
            <View className="mt-[20] mx-[20] px-[15] h-[50] border-gray-400 rounded-lg border-[2px] flex-row items-center">
                <Feather name="search" size={24} color="rgb(75 85 99)" />
                <TextInput
                    placeholder="Encontra tus locales favoritos..."
                    placeholderTextColor="rgb(156 163 175)"
                    className="text-lg text-gray-600  px-[10]"
                ></TextInput>
            </View>

            {/* Sections nav */}
            <SectionsSelector options={options} onPress={sectionSelect} />

            {/* Sections */}
            <ScrollView
                ref={scrollRef}
                className="mt-[20] "
            >
                {/* Section 'Mejores' */}
                <View
                    onLayout={(event) => {
                        const layout = event.nativeEvent.layout
                        // console.log('layout (mejores): ', layout)
                        scrollMeasures[0] = layout.y
                        setScrollMeasures(scrollMeasures)
                    }}
                    className="mx-[20]"
                >
                    <Text className="text-lg font-semibold">
                        Mejores locales
                    </Text>
                    <Text className="text-xs text-gray-400 font-semibold">
                        Los locales favoritos de la comunidad
                    </Text>
                    {[1, 2, 3, 4].map((item, index) => (
                        <ShopCard key={item} />
                    ))}
                </View>

                {/* Section 'En tendencia' */}
                <View
                    onLayout={(event) => {
                        const layout = event.nativeEvent.layout
                        // console.log('layout (en tendencia): ', layout)
                        scrollMeasures[1] = layout.y
                        setScrollMeasures(scrollMeasures)
                    }}
                    className="mx-[20] mt-[30]"
                >
                    <Text className="text-lg font-semibold">
                        Locales en tendencia
                    </Text>
                    <Text className="text-xs text-gray-400 font-semibold">
                        Descubri los locales que estan en tendencia
                    </Text>
                    {[5, 6, 7, 8].map((item, index) => (
                        <ShopCard key={item} />
                    ))}
                </View>

                {/* Section 'Mas cercanos' */}
                <View
                    onLayout={(event) => {
                        const layout = event.nativeEvent.layout
                        // console.log('layout (Mas cercanos): ', layout)
                        scrollMeasures[2] = layout.y
                        setScrollMeasures(scrollMeasures)
                    }}
                    className="mx-[20] mt-[30]"
                >
                    <Text className="text-lg font-semibold">
                        Locales mas cercanos
                    </Text>
                    <Text className="text-xs text-gray-400 font-semibold">
                        Descubri los locales que están mas cerca tuyo
                    </Text>
                    {[9, 10, 11, 12].map((item, index) => (
                        <ShopCard key={item} />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
