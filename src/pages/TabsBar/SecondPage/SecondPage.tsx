import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
const SecondPage: any = (props) => {
    const handleClick:any = ():void=>{
        const { navigation } = props
        navigation.navigate('Detail')
    }
    return (
        <>
            <View style={styles.container}>
                <Text onPress={handleClick}>这里是tabsbar 第二个导航</Text>
            </View>
        </>
    )
}
export default SecondPage
const styles: any = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})