import React, { useCallback, } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import DrawerHeader from './DrawerHeader/DrawerHeader'
import DrawerCard from './DrawerHeader/DrawerCard'
import CardView from '../CardView/CardView'
import DrawerSliderItem from '../DrawerSliderItem/DrawerSliderItem'
import LogBtn from './LogBtn/LogBtn'
import { connect } from 'react-redux'
import { DRESS_WHITE_OR_BLACK } from '../../types/index'

const DrawerSlider: any = (props: any) => {
    const { navigation, dispatch, dress } = props
    const { isBlack = false } = dress
    const handleClick = (params: any): void => {
        navigation.navigate(params)
    }
    const handlePress = (params: any) => {
        dispatch({
            type: DRESS_WHITE_OR_BLACK,
            preload: {
                isBlack: params
            }
        })
    }
    const arr: any[] = ['', '']
    return (
        <>
            <View style={styles.container}>
                <DrawerHeader />
                <ScrollView style={{ flex: 1, paddingBottom: 100, backgroundColor: isBlack ? '#000' : 'transparent' }}>
                    <DrawerCard />
                    <View style={{ width: '100%', paddingHorizontal: 16, paddingBottom: 100 }}>
                        <CardView>
                            <DrawerSliderItem name={"消息中心"} iconName={'email-outline'} />
                            <DrawerSliderItem name={"云贝中心"} iconName={'weather-cloudy'} />
                            <DrawerSliderItem name={"创作者中心"} iconName={'lightbulb-outline'} isBorder={false} />
                        </CardView>

                        <CardView title="音乐服务">
                            <DrawerSliderItem name={"演出"} iconName={'ticket-confirmation-outline'} isBorder={false} />
                            <DrawerSliderItem name={"商城"} iconName={'shopping-outline'} isBorder={false} />
                            <DrawerSliderItem name={"口袋彩铃"} iconName={'bell-outline'} isBorder={false} />
                            <DrawerSliderItem name={"游戏专区"} iconName={'gamepad-variant-outline'} isBorder={false} />
                        </CardView>

                        <CardView title="其他">
                            <DrawerSliderItem name={"设置"} iconName={'hexagon-outline'} isBorder={false} />
                            <DrawerSliderItem name={"夜间模式"} onChange={handlePress} showSwitch={true} iconName={'moon-waning-crescent'} isBorder={false} />
                            <DrawerSliderItem name={"定时关闭"} iconName={'progress-clock'} isBorder={false} />
                            <DrawerSliderItem name={"个性装扮"} iconName={'dresser-outline'} isBorder={false} />
                            <DrawerSliderItem name={"边听边存"} iconName={'headset'} isBorder={false} />
                            <DrawerSliderItem name={"在线听歌免流量"} iconName={'radio-fm'} isBorder={false} />
                            <DrawerSliderItem name={"添加Siri捷径"} iconName={'text-short'} isBorder={false} />
                            <DrawerSliderItem name={"音乐黑名单"} iconName={'circle-off-outline'} isBorder={false} />
                            <DrawerSliderItem name={"青少年模式"} iconName={'play-protected-content'} isBorder={false} />
                            <DrawerSliderItem name={"音乐闹钟"} iconName={'alarm'} isBorder={false} />
                        </CardView>

                        <CardView>
                            <DrawerSliderItem name={"帮助与反馈"} iconName={'help-circle-outline'} isBorder={false} />
                            <DrawerSliderItem name={"我的订单"} iconName={'form-select'} isBorder={false} />
                            <DrawerSliderItem name={"优惠券"} iconName={'ticket-outline'} isBorder={false} />
                            <DrawerSliderItem name={"分享网易云音乐"} iconName={'microsoft-sharepoint'} isBorder={false} />
                            <DrawerSliderItem name={"关于"} iconName={'alert-circle-outline'} isBorder={false} />
                        </CardView>

                        <LogBtn />
                    </View>
                </ScrollView>
            </View>
        </>
    )
}
export default connect(({ dress }: any) => {
    return { dress }
})(DrawerSlider)
const styles: any = StyleSheet.create({
    container: {
        backgroundColor: '#E0E0E0',
        flex: 1,
    }
})