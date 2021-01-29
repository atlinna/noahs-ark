import React, { useCallback, } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import DrawerSliderItem from '../DrawerSliderItem/DrawerSliderItem'

const dataSource: any[] = [
    { name: 'Drawer-1', icon: 'cloud-circle', code: 'DraOne', id: 0 },
    { name: 'Drawer-2', icon: 'cloud-done', code: 'DrawerTwo', id: 1 },
    { name: 'Drawer-3', icon: 'cloud-download', code: 'DrawerThree', id: 2 },
    { name: 'Drawer-4', icon: 'cloud-off', code: 'DrawerFour', id: 3 },
]


const DrawerSlider: any = (props: any) => {
    const { navigation } = props
    const handleClick = (params:any): void => {
        console.log(params)
        navigation.navigate(params)
    }
    const arr: any[] = ['', '']
    return (
        <>
            <View style={styles.container}>
                {
                    arr.map((item, index) => {
                        return (
                            <View key={index}>
                                {
                                    dataSource.map(item => {
                                        return (
                                            <DrawerSliderItem
                                                name={item.name}
                                                iconName={item.icon}
                                                code={item.code}
                                                onClick={handleClick}
                                                id={item.id}
                                                key={item.id}
                                            />
                                        )
                                    })
                                }
                            </View>
                        )
                    })
                }
            </View>
        </>
    )
}
export default DrawerSlider
const styles: any = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        // alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
})