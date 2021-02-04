import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const IndexPage: any = () => {
    return (
        <View style={styles.container}>
            <Image style={{ width: 50, height: 50, borderRadius: 25, transform: [{ translateY: -8 }], borderWidth: 0.3, borderColor: 'rgba(0,0,0,0.2)', opacity: 1, marginRight: 10 }} source={{ uri: 'http://p4.music.126.net/n4RF-YN_cfRP-IMhYQ3cjQ==/109951165639721150.jpg?param=100y100' }} />
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 14 }}>Hey KONG <Text style={{ fontSize: 10, fontWeight: '200' }}>- KEY.L 刘聪/$CC731</Text></Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity>
                    <Icon name={"play-circle-outline"} size={26} style={{ marginRight: 25 }} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Icon name={"playlist-play"} size={26} />
                </TouchableOpacity>

            </View>
        </View>
    )
}
export default IndexPage
const styles: any = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255, 255, 255,0.3)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        borderTopColor: 'rgba(0,0,0,0.1)',
        borderTopWidth: 0.3,
        // opacity:0.8
    }
})