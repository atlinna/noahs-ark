import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PressView from '../../../../components/PressView/pressView'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Switch from './switchs'

const list = [
    [
        { url: 'http://p4.music.126.net/n4RF-YN_cfRP-IMhYQ3cjQ==/109951165639721150.jpg?param=100y100', name: 'Epik High Is Here 上', singer: 'Epik High', id: 1 },
        { url: 'http://p3.music.126.net/-EHFGXVwLwy7ra48lDKMfg==/109951165611159240.jpg?param=100y100', name: '红黑', singer: '蔡文静', id: 2 },
        { url: 'http://p4.music.126.net/jOrfzq4tB9ENWQVWLhi3Ag==/109951165591010361.jpg?param=100y100', name: '天外来物', singer: '薛之谦', id: 3 },
    ],

]

const SwitchTab: any = () => {
    return (
        <PressView title="GALI的相似推荐" style={{ marginTop: 10 }} secTitle="私人订制" >
            <BtnInfo />
            <View style={{ paddingBottom: 15 }}>
                {
                    list[0].map((item, index) => {
                        return (<Switch name={item.name} singer={item.singer} id={item.id} key={item.id} url={item.url} index={index} />)
                    })
                }
            </View>
        </PressView>
    )
}

const BtnInfo = () => {
    return (
        <>
            <Icon name={"play"} size={18}  />
            <Text style={{ fontSize: 12 }}>播放</Text>
        </>
    )
}
export default SwitchTab
const styles: any = StyleSheet.create({
})