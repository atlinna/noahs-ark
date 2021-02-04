import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
const IndexPage: any = (props: any) => {

    const { title = "", children } = props

    return (
        <View style={styles.container}>
            {
                title ?
                    <View style={{ paddingVertical: 15, paddingLeft: 20, borderBottomColor: 'rgba(0,0,0,0.1)', borderBottomWidth: 0.3 }}>
                        <Text style={{ color: '#333', fontWeight: '300', fontSize: 12, }}>音乐服务</Text>
                    </View>
                    :
                    null
            }
            {children}
        </View>
    )
}
export default IndexPage
const styles: any = StyleSheet.create({
    container: {
        marginTop: 15,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'rgba(255,255,255,0.5)'
    }
})