import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
const PressView: any = (props: any) => {

    const { secTitle = '', title = "", children, style = {}, handlePress = () => { } } = props

    return (
        <View style={[styles.container, style]}>
            <View>
                {
                    secTitle ? <Text style={{ color: '#999', fontSize: 12, marginBottom: 2 }}>{secTitle}</Text> : null
                }
                <View style={styles.flexbox}>
                    <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 20 }}>{title}</Text>
                    <TouchableOpacity onPress={handlePress} style={styles.btn}>{children[0]}</TouchableOpacity>
                </View>
            </View>
            <View>
                {children[1]}
            </View>
        </View>
    )
}
export default PressView
const styles: any = StyleSheet.create({
    btn: {
        // width: 60,
        paddingHorizontal: 6,
        height: 24,
        backgroundColor: 'rgba(255,255,255,0.7)',
        borderRadius: 13,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    flexbox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // paddingVertical: 20,
        paddingBottom: 20
    },
    container: {
        paddingHorizontal: 16,
        backgroundColor: 'rgba(255,255,255,0.5)',
        paddingTop: 20
    },
})