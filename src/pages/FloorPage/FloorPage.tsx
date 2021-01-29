import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
const FloorPage = (props: any) => {
    const { navigation } = props
    const handleClick:any = () => {
        navigation.goBack();
    }
    return (
        <>
            <View style={styles.container}>
                <Text onPress={handleClick}>这是Floor页面</Text>
            </View>
        </>
    )
}

const styles:any = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default FloorPage