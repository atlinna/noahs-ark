import React, { useCallback } from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import { connect } from 'react-redux';//将我们的页面和action链接起来
import Header from './Header/header'
import Swiper from './Swiper/swiper'
import FlexBtnBox from './FlexBtnBox/flexBtnBox'
import FavourList from './FavourList/favourList'
import SwitchTab from './SwitchTab/switchTab'
import CardSwiper from './CardSwiper/CardSwiper'
import PlayerView from './PlayerView/PlayerView'

const btnList: any[] = [
    { name: "每日推荐", iconName: 'calendar-month', id: 1 },
    { name: "私人FM", iconName: 'radio', id: 2 },
    { name: "歌单", iconName: 'playlist-music-outline', id: 3 },
    { name: "排行榜", iconName: 'playlist-minus', id: 4 },
    { name: "直播", iconName: 'circle-double', id: 5 },
    { name: "数字专辑", iconName: 'album', id: 6 },
    { name: "歌房", iconName: 'xamarin', id: 7 },
    { name: "游戏专区", iconName: 'gamepad-variant-outline', id: 8 },
]

const FirstPage: any = (props: any) => {
    const { navigation, dispatch, counter = {}, dress = {} } = props
    const { isBlack = false } = dress
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />
            <ScrollView style={{ flex: 1, width: '100%', backgroundColor: isBlack ? '#000' : 'transparent' }}>
                <Swiper />
                <FlexBtnBox dataSource={btnList} />
                <FavourList />
                <SwitchTab />
                <CardSwiper />
                <FavourList />
                <SwitchTab />
                <FavourList />
                <SwitchTab />
            </ScrollView>
            <PlayerView />
        </SafeAreaView>
    )
}

const styles: any = StyleSheet.create({
    container: {
        backgroundColor: '#E0E0E0',
        flex: 1,
        paddingHorizontal: 16,
        // justifyContent: 'center',
        // alignItems: 'center'
    },

})

export default connect(({ counter, dress }: any) => {
    return { counter, dress }
})(FirstPage)