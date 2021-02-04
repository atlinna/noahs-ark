import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
const Switchs: any = (props: any) => {
    const { des, name, singer, url, id ,index} = props
    return (
        <View style={styles.container} key={id}>
            <Image style={{ width: 50, height: 48, backgroundColor: '#000', borderRadius: 7 }} source={{ uri: url }} />
            <View style={[{ marginLeft: 10,paddingTop:2,borderBottomColor:'rgba(0,0,0,0.1)',flex:1,height:'100%' },index!==2?{borderBottomWidth:1,}:null]}>
                <Text style={{ fontSize: 16 }}>{name} <Text style={{ fontSize: 12, color: '#333', fontWeight: '300' }}>- {singer}</Text></Text>
                {
                    !des ?
                        <Text style={{ color: '#333', fontSize: 12, fontWeight: '200', paddingTop: 3 }}>
                            肤浅的世界 低调是最大的误解
                    </Text>
                        :
                        null
                }
            </View>
        </View>
    )
}
export default Switchs
const styles: any = StyleSheet.create({
    container: {
        paddingVertical: 3,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:5,
    }
})