import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const FirstPage:any = (props:any) => {
    const { navigation } = props

    const handleClick:any=():void=>{
        console.log(navigation)
        navigation.navigate('Home')
    }
    return (
        <>
            <View style={styles.container}>
                <Text onPress={handleClick}>这里是第一个TabBar 导航</Text>
                {/* <MaterialIcons  name={'home'} size={26} color="skyblue" /> */}
            </View>
        </>
    )
}

const styles:any = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default FirstPage