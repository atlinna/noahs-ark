import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'


const DrawerCard: any = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                    <View>
                        <Text style={{ color: '#FCE3DE', fontWeight: 'bold', fontSize: 18 }}>黑胶 VIP</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: '#B88C73', fontSize: 12 }}>2021.12.12 到期，我的VIP</Text>
                            <Icon name="chevron-right" size={20} color='#B88C73' style={{ fontWeight: '200' }} />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={{color: '#B88C73',fontSize:10,}}>会员中心</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ color: '#B88C73' }}>出暖花开正当时，好运和你一起到来</Text>
                    <Image style={{ width: 30, height: 30, borderRadius: 4 }} source={{ uri: 'https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF' }} />
                </View>
            </View>
        </View>
    )
}
export default DrawerCard
const styles: any = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        paddingHorizontal: 16
    },
    card: {
        flex: 1,
        backgroundColor: '#2D2D2D',
        height: '100%',
        borderRadius: 10,
        padding: 10,
        paddingHorizontal:16,
        justifyContent: 'space-between'
    },
    btn:{
        borderColor:'#B88C73',
        borderWidth:1,
        height:20,
        borderRadius:10,
        paddingHorizontal:6,
        lineHeight:20,
        justifyContent:'center'
    }
})