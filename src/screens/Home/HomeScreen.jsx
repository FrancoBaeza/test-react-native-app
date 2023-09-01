import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import Svg, { Path } from 'react-native-svg'

import { Feather, FontAwesome5 } from '@expo/vector-icons'

export default HomeScreen = ({ navigation }) => {
    const lista = [
        {
            id: 1,
            name: 'Burger',
            price: 10
        },
        {
            id: 2,
            name: 'Burger',
            price: 10
        },
        {
            id: 3,
            name: 'Burger',
            price: 10
        },
        {
            id: 4,
            name: 'Burger',
            price: 10
        },
        {
            id: 5,
            name: 'Burger',
            price: 10
        },
        {
            id: 6,
            name: 'Burger',
            price: 10
        },
        {
            id: 7,
            name: 'Burger',
            price: 10
        }
    ]

    return (
        <SafeAreaView className=" flex flex-col bg-slate-100">
            <ScrollView>
                <View className="mt-[20] p-[20] flex-row justify-between">
                    {/* Location */}
                    <View className="gap-[5] tracking-wider">
                        <Text className=" tracking-wider text-base text-gray-500">
                            Tu ubicación
                        </Text>
                        <Text className=" tracking-wider text-lg font-semibold">
                            Libertador San Martin
                        </Text>
                    </View>

                    {/* Logo */}
                    <Svg
                        className=" fill-blue-700 m-[5]"
                        viewBox="0 0 50 50"
                        width="35px"
                        height="35px"
                    >
                        <Path d="M46.707,12.293l-8-8c-0.391-0.391-1.023-0.391-1.414,0L25,16.586L12.707,4.293c-0.391-0.391-1.023-0.391-1.414,0l-8,8	C3.105,12.48,3,12.735,3,13v23c0,0.265,0.105,0.52,0.293,0.707l10,10c0.286,0.287,0.718,0.372,1.09,0.217	C14.757,46.769,15,46.404,15,46V25.414l9.293,9.293C24.488,34.902,24.744,35,25,35s0.512-0.098,0.707-0.293L35,25.414V46	c0,0.404,0.243,0.769,0.617,0.924C35.741,46.975,35.871,47,36,47c0.26,0,0.516-0.102,0.707-0.293l10-10	C46.895,36.52,47,36.265,47,36V13C47,12.735,46.895,12.48,46.707,12.293z" />
                    </Svg>
                </View>

                {/* Search input */}
                <View className=" mt-[10] px-[20]">
                    <View className="px-[15] h-[50] border-gray-400 rounded-lg border-[2px] flex-row items-center">
                        <Feather
                            name="search"
                            size={24}
                            color="rgb(75 85 99)"
                        />
                        <TextInput
                            // onChangeText={(text) => {
                            //     setCredentials({
                            //         ...credentials,
                            //         username: text
                            //     })
                            // }}
                            // value={credentials.username}

                            placeholder="Busca lo que quieras..."
                            placeholderTextColor="rgb(156 163 175)"
                            className="text-lg text-gray-600  px-[10]"
                        ></TextInput>
                    </View>

                    {/* Categories */}
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        className="mt-[20] flex-row"
                    >
                        {[1, 2, 3, 4, 5].map((item) => (
                            <View className="flex-col items-center mr-[20]">
                                <FontAwesome5
                                    name="hamburger"
                                    size={30}
                                    color="black"
                                />
                                <Text className=" text-xs font-semibold">
                                    Hamburguesa
                                </Text>
                            </View>
                        ))}
                    </ScrollView>

                    {/* Banners */}
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        className="mt-[20] flex-row"
                    >
                        {[1, 2, 3, 4, 5].map((item) => (
                            <View className=" w-[230] h-[130] bg-gray-500 rounded-lg flex-col items-center mr-[20]">
                                </View>
                        ))}   
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
