import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Carousel, } from '@ant-design/react-native';

const imgList: any[] = [
    { url: 'http://p1.music.126.net/l7xwjgs1xhXRu1ah8BpCTQ==/109951165688176151.jpg?imageView&quality=89', id: 1 },
    { url: 'http://p1.music.126.net/QTGL4etB7m3grD7h2IPCQQ==/109951165688221605.jpg?imageView&quality=89', id: 2 },
    { url: 'http://p1.music.126.net/G05X21t5uUQQHPp5hWQ3YQ==/109951165688101451.jpg?imageView&quality=89', id: 3 },
    { url: 'http://p1.music.126.net/0Y3WRRNw0cPyuYSM81RKdg==/109951165688314761.jpg?imageView&quality=89', id: 4 },
    { url: 'http://p1.music.126.net/yC2ZlXZLcCU1VoOHLfJX5Q==/109951165688093679.jpg?imageView&quality=89', id: 5 },
    { url: 'http://p1.music.126.net/aN4NoMSq07ShtzBzpu_DdQ==/109951165688120528.jpg?imageView&quality=89', id: 6 },
    { url: 'http://p1.music.126.net/xbBVEh0N3KJPAlo8GXHyDQ==/109951165688161692.jpg?imageView&quality=89', id: 7 },
    { url: 'http://p1.music.126.net/A8-XFneW7OyokLB9t1LrKQ==/109951165688146697.jpg?imageView&quality=89', id: 8 },
]

const Swiper: any = () => {
    return (
        <View style={styles.container}>
            <Carousel
                style={styles.wrapper}
                selectedIndex={0}
                autoplay
                infinite
                dotStyle={{width:8,height:2,backgroundColor:'#666',marginBottom:0}}
                dotActiveStyle={{backgroundColor:'#fff'}}
            >
                {
                    imgList.map((item: any) => {
                        return (
                            <Image style={{ flex: 1, width: '100%', height: 100 }} source={{ uri: item.url }} key={item.id} />
                        )
                    })
                }
            </Carousel>
        </View>
    )
}
export default Swiper
const styles: any = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingHorizontal: 16,
        backgroundColor: 'rgba(255,255,255,0.5)',
        paddingBottom:10
    },
    wrapper: {
        backgroundColor: '#E0E0E0',
        height: 120,
        borderRadius: 12,
        overflow: 'hidden'
    },
    containerHorizontal: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 120,

    },
    text: {
        color: '#fff',
        fontSize: 36,
    },
})