import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PressView from '../../../../components/PressView/pressView'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FavourScroll from './favourScroll'


const BtnInfo = () => {
    return (
        <>
            <Text style={{ marginRight: -5,fontSize:12 }}>更多</Text>
            <Icon name={"chevron-right"} size={18} />
        </>
    )
}

const FavourList: any = () => {
    return (
        <PressView title="推荐歌单">
            <BtnInfo />
            <FavourScroll />
        </PressView>
    )
}
export default FavourList
const styles: any = StyleSheet.create({
    // flexbox:{
    //     flexDirection:row
    // }
})