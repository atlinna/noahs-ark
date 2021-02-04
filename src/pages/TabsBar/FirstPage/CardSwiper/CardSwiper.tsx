import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Image,LayoutAnimation } from 'react-native'
import PressView from '../../../../components/PressView/pressView'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const list = [
    { url: 'http://p1.music.126.net/nYQ8p77fkgocpraoao9SUw==/109951165668265470.jpg?param=140y140', id: 1, },
    { url: 'http://p1.music.126.net/x3HgbhuM8u6tgbIetouJXg==/109951164501729715.jpg?param=140y140', id: 2, },
    { url: 'http://p2.music.126.net/soWpPdvpo6F8kSPIsXaXRQ==/109951165668377442.jpg?param=140y140', id: 3, },
    { url: 'http://p1.music.126.net/4XIiSnVm2-c8QcoLMS6M2A==/109951165669931392.jpg?param=140y140', id: 4, },
    { url: 'http://p2.music.126.net/bL-MOCnof7-ZVoA38Luk3g==/109951165672560031.jpg?param=140y140', id: 5, },
]

const BtnInfo = () => {
    return (
        <>
            <Text style={{ marginRight: -5, fontSize: 12 }}>去推歌</Text>
            <Icon name={"chevron-right"} size={18} />
        </>
    )
}

const CardSwiper: any = () => {
    const [current, setCurrent] = useState(2)
    const getStyles = (index: number) => {
        let nums = 0
        if (current === index) {
            nums = 0
        } else {
            nums = (index - current) * 40
        }
        return nums
    }
    const getIndex = (index: number) => {
        let zin: number = 0;
        if (current === index) {
            zin = 10
        } else if (index < current) {
            zin = index
        } else {
            zin = 10 - index
        }

        return zin
    }

    const handlePress = () => {
        // console.log(1)
        LayoutAnimation.configureNext(LayoutAnimation.create(1000,
            LayoutAnimation.Types.easeInEaseOut,
            LayoutAnimation.Properties.scaleXY));
        let count = current + 1
        if (count === list.length) count = 0
        setCurrent(count)
    }


    return (
        <PressView title="精选音乐视频" style={{ marginTop: 10 }} handlePress={handlePress}  >
            <BtnInfo />
            <View style={{ position: 'relative', height: 120, paddingBottom: 10, alignItems: 'center', justifyContent: 'center' }}>
                {
                    list.map((item, index) => {
                        return (
                            <Image key={item.id} style={[{ width: 100, height: current === index ? 110 : 100, position: 'absolute', transform: [{ translateX: getStyles(index) }], zIndex: getIndex(index), borderWidth: current === index ? 1 : 0, borderColor: '#999', borderRadius: 10 },]} source={{ uri: item.url }} />
                        )
                    })
                }
                <View style={{ position: 'absolute', zIndex: 8, backgroundColor: 'rgba(255,255,255,0.3)', width: 750, height: 100 }}></View>
            </View>
        </PressView>
    )
}
export default CardSwiper
const styles: any = StyleSheet.create({
    wrap: {
        width: 100,
        height: 100,
        backgroundColor: '#000',
        position: 'absolute',
        left: '50%',
        // transform:[{translate:[50,50,-10]}]
    },
    wrap1: {
        backgroundColor: 'red'
    }
})