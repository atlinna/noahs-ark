import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerHeader: any = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name={'account-circle'} size={26} color="#999" />
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: '500' }}>Lucas-Btn</Text>
                    <Icon name="chevron-right" size={24} color="#000" style={{ fontWeight: '200' }} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="scan-helper" color="#000" size={18} />
            </TouchableOpacity>
        </View>
    )
}
export default DrawerHeader
const styles: any = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        paddingTop: 60,
        width: '100%',
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom:20
    }
})