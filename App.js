import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

export default function App() {
    return (
         <SafeAreaView style={s.container}>
            <View style={s.container}>
                <Text>Hola tonto</Text>
                {/* <StatusBar style="auto" /> */}
            </View>
        </SafeAreaView>
    )
}

const s = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center'
    }
})
