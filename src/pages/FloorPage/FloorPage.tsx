import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
const FloorPage = () => {
    return (
        <>
            <View style={styles.container}>
                <Text>这是Floor页面</Text>
            </View>
        </>
    )
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
    }
})

export default FloorPage