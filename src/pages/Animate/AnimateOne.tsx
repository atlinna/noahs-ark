import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Tabs from '../../components/Tabs/tabs'

const tabList = [
    {name:'tab-1',current:'tab1',id:1},
    {name:'tab-2',current:'tab2',id:2},
    {name:'tab-3',current:'tab3',id:3},
]

const IndexPage: any = () => {
    return (
        <>
                <Tabs tabList={tabList}>
                    <View style={styles.box}><Text>页面 ---- 1</Text></View>
                    <View style={styles.box}><Text>页面 ---- 2</Text></View>
                    <View style={styles.box}><Text>页面 ---- 3</Text></View>
                </Tabs>
        </>
    )
}
export default IndexPage
const styles: any = StyleSheet.create({
    box:{
        // flex:1,
        width:'100%',
        backgroundColor:'#fff'
    }
})