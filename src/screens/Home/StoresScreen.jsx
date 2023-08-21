import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'

export default StoresScreen = () => {
    const { container } = s

    return (
        <SafeAreaView style={container}>
            <View style={container}>
                <Text style={{marginTop: 40}}>Aca van los stores</Text>
            </View>
        </SafeAreaView>
    )
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7'
    }
})
