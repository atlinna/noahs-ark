import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, Dimensions } from 'react-native'
import { tabprop } from './tabprop'

const Tabs: React.FC<tabprop> = (props: any) => {
    // console.log(props)
    const { tabList, children } = props

    const [x, setX] = useState(0)
    const [winX, setWinX] = useState(0)
    const [current, setCurrent] = useState(tabList[0].current)
    const [lineWidth, setLineWidth] = useState(0)
    const [windowWidth, setWindowWidth] = useState(0)

    useEffect(() => {
        setWindowWidth(Dimensions.get('window').width);
        setLineWidth(Dimensions.get('window').width / tabList.length)
    }, [])



    const handlePress = (item: any, index: number): void => {
        if (item.current === current) return
        LayoutAnimation.configureNext(LayoutAnimation.create(300,
            LayoutAnimation.Types.easeInEaseOut,
            LayoutAnimation.Properties.scaleXY));
        setCurrent(item.current)
        setX(lineWidth * index)
        setWinX(windowWidth * index * -1)
    }

    return (
        <>
            <View style={styles.container}>
                {
                    tabList.map((item: any, index: number) => {
                        return (
                            <TouchableOpacity key={item.id} style={styles.btn} onPress={() => handlePress(item, index)}>
                                <Text style={[{ fontSize: 16 }, current === item.current ? styles.current : {}]}>{item.name}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
                <View style={[styles.authline, { width: lineWidth, left: x }]}></View>
            </View>
            <View style={[styles.layout, { left: winX }]}>
                {/* <View style={[{ width: windowWidth, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }]}>
                    <Text>页面一</Text>
                </View>
                <View style={[{ width: windowWidth, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }]}>
                    <Text>页面二</Text>
                </View>
                <View style={[{ width: windowWidth, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }]}>
                    <Text>页面三</Text>
                </View> */}
                {children}
            </View>
        </>
    )
}
export default Tabs
const styles: any = StyleSheet.create({
    container: {
        height: 40,
        flexDirection: 'row',
        position: 'relative'
    },
    btn: {
        flexDirection: 'row',
        flex: 1,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.1)'
    },
    tabheader: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    authline: {
        width: '30%',
        height: 2,
        backgroundColor: 'blue',
        position: 'absolute',
        left: 0,
        bottom: 0
    },
    current: {
        color: 'teal',
    },
    layout: {
        flex: 1,
        width: '100%',
        // height:100,
        flexDirection: 'row',
        position: 'relative',
        // backgroundColor: '#000',
    },
})