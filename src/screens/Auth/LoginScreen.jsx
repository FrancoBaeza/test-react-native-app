import { useState } from 'react'
import {
    View,
    Text,
    TextInput,
    Pressable,
    StyleSheet,
    Animated,
    TouchableWithoutFeedback,
    KeyboardAvoidingView
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Svg, { Path } from 'react-native-svg'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function LoginScreen() {
    const backgroundColor = new Animated.Value(0)
    const navigation = useNavigation()

    const [error, setError] = useState('')
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const handlePressIn = () => {
        Animated.timing(backgroundColor, {
            toValue: 1,
            duration: 300,
            useNativeDriver: false
        }).start()
    }

    const handlePressOut = () => {
        Animated.timing(backgroundColor, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false
        }).start()

        // handle login
        console.log(credentials)
        if (
            credentials.username.toLowerCase() === 'franco' &&
            credentials.password === '1234'
        ) {
            // redirect to RootNavigator
            navigation.navigate('RootNavigator')
        } else {
            // show error message
            setError('Invalid credentials')
            setCredentials({
                username: '',
                password: ''
            })
        }
    }

    const interpolatedColor = backgroundColor.interpolate({
        inputRange: [0, 1],
        outputRange: ['rgba(46, 204, 113, 0)', '#f1f5f9']
    })

    const buttonStyles = {
        ...styles.button,
        backgroundColor: interpolatedColor
    }

    return (
        <SafeAreaView className="flex-1 flex-col bg-orange-400">
            <KeyboardAvoidingView
                style={styles.container}
                behavior={'padding'}
            >
                {/* Logo */}
                <View className="flex-1 items-center p-[20]">
                    <Svg
                        className=" fill-slate-100 mt-[20]"
                        viewBox="0 0 50 50"
                        width="70px"
                        height="70px"
                    >
                        <Path d="M46.707,12.293l-8-8c-0.391-0.391-1.023-0.391-1.414,0L25,16.586L12.707,4.293c-0.391-0.391-1.023-0.391-1.414,0l-8,8	C3.105,12.48,3,12.735,3,13v23c0,0.265,0.105,0.52,0.293,0.707l10,10c0.286,0.287,0.718,0.372,1.09,0.217	C14.757,46.769,15,46.404,15,46V25.414l9.293,9.293C24.488,34.902,24.744,35,25,35s0.512-0.098,0.707-0.293L35,25.414V46	c0,0.404,0.243,0.769,0.617,0.924C35.741,46.975,35.871,47,36,47c0.26,0,0.516-0.102,0.707-0.293l10-10	C46.895,36.52,47,36.265,47,36V13C47,12.735,46.895,12.48,46.707,12.293z" />
                    </Svg>
                </View>

                {/* Inputs */}
                <View className="flex-[4] p-[20]">
                    <Text className="text-slate-100 text-2xl">LOGIN</Text>

                    {/* username */}
                    <View className="mt-[20]">
                        {/* <Text className="text-slate-100 text-xs ">
                            Username
                        </Text> */}
                        <TextInput
                            onChangeText={(text) => {
                                setCredentials({
                                    ...credentials,
                                    username: text
                                })
                            }}
                            placeholder='Username'
                            placeholderTextColor="#fff"
                            value={credentials.username}
                            className="text-lg text-slate-100 p-0 h-[40] border-slate-100 border-b-[1px]"
                        />
                    </View>

                    {/* password */}
                    <View className="mt-[40]">
                        {/* <Text className="text-slate-100 text-xs ">
                            Password
                        </Text> */}
                        <TextInput
                            onChangeText={(text) => {
                                setCredentials({
                                    ...credentials,
                                    password: text
                                })
                            }}
                            placeholder='Password'
                            placeholderTextColor="#fff" 
                            value={credentials.password}
                            secureTextEntry={true}
                            className="text-lg text-slate-100 p-0 h-[40] border-slate-100 border-b-[1px]"
                        />
                    </View>

                    {/* Error display */}
                    {error !== '' && (
                        <View className="mt-[10] flex-row justify-between">
                            <Text className="text-red-500  font-semibold">
                                Invalid credentials
                            </Text>

                            <Pressable
                                onPress={() => setError('')}
                                className="rounded-full p-[5]"
                            >
                                <AntDesign name="close" size={20} color="red" />
                            </Pressable>
                        </View>
                    )}

                    {/* Login btn */}
                    <View className="mt-[40]">
                        <TouchableWithoutFeedback
                            onPressIn={handlePressIn}
                            onPressOut={handlePressOut}
                        >
                            <Animated.View
                                style={buttonStyles}
                                className=" self-center w-[150] border-[1px] border-slate-100 active:bg-slate-50/50 duration-300"
                            >
                                <Text className="text-slate-100 text-lg text-center">
                                    LOGIN
                                </Text>
                            </Animated.View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </KeyboardAvoidingView>
            {/* Bottom */}
            <View className=" flex-1 flex-col-reverse p-[20]">
                {/* <Pressable
                    onPress={() => navigation.navigate('Register')}
                    className=" self-end rounded-full p-[10] mt-[30] bg-tertiary-base"
                >
                    <AntDesign name="plus" size={30} color="white" />
                </Pressable> */}

                <Text className=" text-slate-100 underline ">
                    Terms and Conditions
                </Text>
            </View>
        </SafeAreaView>
    )

    // return (
    //     <View style={{flex: 1}}>
    //         <KeyboardAvoidingView
    //             behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    //             style={styles.container}
    //         >
    //             <View style={styles.content}>
    //                 <TextInput style={styles.input} placeholder="Username" />
    //                 <TextInput
    //                     style={styles.input}
    //                     placeholder="Password"
    //                     secureTextEntry
    //                 />
    //                 <View style={styles.placeholderTextContainer}>
    //                     <Text style={styles.placeholderText}>
    //                         Placeholder text that should be covered by keyboard.
    //                     </Text>
    //                 </View>
    //             </View>
    //         </KeyboardAvoidingView>

    //         <View style={{flex: 1}}>
    //             <Text>Holaaaaaaaaaaaaaaaaaa</Text>
    //         </View>
    //     </View>
    // )
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1
//     },
//     content: {
//         flex: 1,
//         justifyContent: 'center',
//         paddingHorizontal: 20
//     },
//     input: {
//         height: 40,
//         borderColor: 'gray',
//         borderWidth: 1,
//         marginBottom: 10,
//         paddingHorizontal: 10
//     },
//     placeholderTextContainer: {
//         paddingVertical: 10,
//         alignItems: 'center'
//     },
//     placeholderText: {
//         fontSize: 16,
//         color: 'gray'
//     }
// })

const styles = StyleSheet.create({
    button: {},
    container: {
        flex: 3
        // justifyContent: 'center',
        // alignItems: 'center',
        // padding: 16
    }
})
