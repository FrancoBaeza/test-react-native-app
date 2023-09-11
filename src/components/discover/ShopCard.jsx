import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Pressable
} from 'react-native'
import { Feather, FontAwesome5, AntDesign } from '@expo/vector-icons'


export default function ShopCard({ shop }) {
    return (
        <View
            className={` mt-[20] p-[10] rounded-lg w-full h-[150] border-[1px] border-gray-300`}
        >
            <View className={`justify-between flex-row`}>
                <View className={`flex-row `}>
                    {/* Image */}
                    <Image
                        source={{
                            uri: 'https://picsum.photos/200/300'
                        }}
                        className="w-[60] h-[60] mr-[10] rounded-full"
                    />

                    {/* Name and badges */}
                    <View>
                        <Text className="text-sm font-semibold">
                            Nombre del local
                        </Text>
                        <View
                            className={`flex-row items-center rounded bg-blue-600 py-[1] px-[5] self-start`}
                        >
                            <AntDesign
                                name="tag"
                                size={11}
                                color=" rgb(219 234 254)"
                            />
                            <Text className={` text-xs text-blue-100 ml-[5]`}>
                                Badge
                            </Text>
                        </View>
                    </View>
                </View>

                <Pressable
                    className={`flex-row items-center self-start py-[4] px-[12] rounded-2xl bg-blue-600`}
                >
                    <Text className={` text-xs text-blue-50`}>Ver</Text>

                    <Feather
                        name="chevron-right"
                        size={15}
                        color="rgb(239 246 255)"
                    />
                </Pressable>
            </View>
        </View>
    )
}
