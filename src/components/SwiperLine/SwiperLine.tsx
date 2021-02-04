import React, { useRef, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, PanResponder, Animated } from 'react-native'

const SwiperLine: any = (props: any) => {
    // const [x, setX] = useState(0)
    let ISOPEN = false
    // const [isOpen, setIsOpen] = useState(false)
    const [anx, setAnX] = useState(0)
    const pan = useRef(new Animated.ValueXY()).current;
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: (evt, ges) => {
                // console.log(evt,ges)
                return true
            },
            onPanResponderGrant: () => {
                pan.setOffset({
                    x: pan.x._value,
                    y: pan.y._value
                });
            },
            onPanResponderMove:
                // (e,ges)=>{
                //     console.log(ges.dx)
                //     anx.setValue(ges.dx)
                // }
                Animated.event(
                    [
                        null,
                        { dx: pan.x },
                    ],
                    {
                        listener: (event: any, gestureState: any) => handleSwiper(event, gestureState)
                    },
                )
            ,
            onPanResponderRelease: () => {
                // pan.flattenOffset();
                // pan.setValue({
                //     x: 0,
                //     y: pan.y._value
                //   })
                if (ISOPEN) {
                    Animated.spring(
                        pan, // Auto-multiplexed
                        { toValue: { x: -200, y: 0, } } // Back to zero
                    ).start();
                    pan.flattenOffset();
                } else {
                    Animated.spring(
                        pan, // Auto-multiplexed
                        { toValue: { x: 0, y: 0, } } // Back to zero
                    ).start();
                }
            }
        })
    ).current;

    const handleSwiper: any = (evt: any, gestureState: any): void => {
        // console.log(gestureState.moveX, ' ', gestureState.dx, ' ', gestureState.vx, ' ', gestureState.x0)
        let disX: number = gestureState.dx;
        setAnX(gestureState.moveX)
        if (!ISOPEN) {
            if (disX > 0) {
                ISOPEN = false
            } else if (disX < -40) {
                ISOPEN = true
            }
        } else {
            if (disX < 0) {

            } else if (disX > 0) {
                ISOPEN = false
            }
        }
    }

    // const handlePress = () => {
    //     console.log(pan.x)
    //     pan.x['_value'] = 0
    // }

    return (
        <>
            <View style={styles.container}>
                <Animated.View
                    style={[{
                        transform: [{ translateX: pan.x }]
                    }, { zIndex: 1, flex: 1 }]}
                    {...panResponder.panHandlers}
                >
                    <View style={styles.layout}>
                        {/* <TouchableOpacity onPress={handlePress}><Text>Click</Text></TouchableOpacity> */}
                        {props.children}
                    </View>
                </Animated.View>

                <View style={[styles.btnbox, { width: anx }]}>
                    <TouchableOpacity style={[styles.btn, , { backgroundColor: 'red' }]}><Text style={[{ color: '#fff' }, styles.btntxt]}>删除</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btn}><Text style={[{ color: '#fff' }, styles.btntxt]}>确定</Text></TouchableOpacity>
                </View>
            </View>
        </>
    )
}
export default SwiperLine
const styles: any = StyleSheet.create({
    container: {
        minHeight: 60,
        width: '100%',
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderWidth:1,
    },
    layout: {
        zIndex: 1,
        width: '100%',
        flex: 1,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
    },
    btnbox: {
        backgroundColor: 'red',
        // width:200,
        // flex: 1,
        // height: '100%',
        // width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    // btnbox: {
    //     position: 'absolute',
    //     flex: 1,
    //     height: '100%',
    //     width: '100%',
    //     flexDirection: 'row',
    //     justifyContent: 'flex-end',

    // },
    btn: {
        // height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // minWidth: 100,

        flex: 1,
        backgroundColor: 'orange',
    },
    btntxt: {
        // flex:1,
        fontSize: 16,
        fontWeight: '500',
    }
})