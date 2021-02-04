import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const list = [
    { url: 'http://p1.music.126.net/nYQ8p77fkgocpraoao9SUw==/109951165668265470.jpg?param=140y140', id: 1, nums: 77, title: '谁还不是个丧气上进的小仙女啊！' },
    { url: 'http://p2.music.126.net/4epA9ecC0vUmKLY24ns19A==/109951165679803814.jpg?param=140y140', id: 2, nums: 66, title: '姑娘大步走吧，你是他青春只配错过的那个人54万' },
    { url: 'http://p2.music.126.net/nffwktMrgd06fax3-Aj-Zw==/109951165557056357.jpg?param=140y140', id: 3, nums: 55, title: '都市小情书 | 空气中的浪漫因子' },
    { url: 'http://p2.music.126.net/soWpPdvpo6F8kSPIsXaXRQ==/109951165668377442.jpg?param=140y140', id: 4, nums: 44, title: ' 对话梁鸿：有“打工人”的自觉总是好的' },
    { url: 'http://p2.music.126.net/Xvo6PwBcdOA69ipcpV9YYg==/109951165463253777.jpg?param=140y140', id: 5, nums: 33, title: '你数数 这是你第几次丢下我' },
    { url: 'http://p2.music.126.net/bL-MOCnof7-ZVoA38Luk3g==/109951165672560031.jpg?param=140y140', id: 6, nums: 22, title: ' #幸福# 只要最后是你，异地恋不算什么 #晚安bar异地恋...' },
    { url: 'http://p2.music.126.net/bLaLxfeZ4KK8UwxKNKYkfQ==/109951165346753399.jpg?param=140y140', id: 7, nums: 11, title: '我愿你好，即使后来你与我无关。' },
    { url: 'http://p2.music.126.net/WuO00e_XkrTiNncd-fLD8Q==/109951165678821053.jpg?param=140y140', id: 8, nums: 717, title: ' 中间人（原唱：Ice Paper）' },
]

const FavourList: any = () => {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingBottom:17}}>
            {
                list.map((item: any) => {
                    return (
                        <TouchableOpacity key={item.id} style={styles.btnbox}>
                            <View style={styles.imgbox}>
                                <Image style={styles.img} source={{ uri: item.url }} />
                                <View style={styles.posbox}>
                                    <Icon name={'play-outline'} size={15} color="#fff" />
                                    <Text style={{ color: '#ffffff', fontSize: 12, }}>{item.nums}万</Text>
                                </View>
                            </View>

                            <View style={{ paddingHorizontal: 2 }}>
                                <Text style={{ width: 100, lineHeight: 18, fontSize: 12, color: '#333', fontWeight: '500', paddingHorizontal: 0 }} numberOfLines={2}>
                                    {item.title}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>
    )
}
export default FavourList
const styles: any = StyleSheet.create({
    img: {
        width: 100,
        height: 96,
        backgroundColor: '#000',
        borderRadius: 10
    },
    imgbox: {
        position: 'relative',

    },
    posbox: {
        position: 'absolute',
        flexDirection: 'row',
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
        right: 5,
        top: 5,
    },
    btnbox:{
        marginRight:10
    }
})