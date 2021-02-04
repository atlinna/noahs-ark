import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
const LogBtn: any = () => {
    return (
            <TouchableOpacity style={{backgroundColor:'rgba(255,255,255,0.5)',width:'100%',borderRadius:10,paddingVertical:15,alignItems:'center',marginTop:15}}>
                <Text style={{ color: '#FF0000',fontSize:16,fontWeight:'300' }}>退出登录</Text>
            </TouchableOpacity>
    )
}
export default LogBtn
const styles: any = StyleSheet.create({
})