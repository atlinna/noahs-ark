import React from 'react'
import { Button, Alert, StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export const HomeOptions = (route: any) => {
    const { navigation } = route
    return {
        title: "myHome",
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerRight: (params: any) => (
            <Button
                onPress={() => {
                    Alert.alert('准备跳转到Detail页面!')
                    navigation.navigate('Detail')
                }}
                title="Info"
                color="#fff"
            />
        ),
    }
}

export const DetailOptions = (props: any) => {
    return {
        headerTitle: () => {
            return (
                <>

                </>
            )
        }
    }
}

export const FloorOptions = () => {
    return {
        headerShown: false//隐藏头部导航栏
    }
}


// ---------------------------------------
export const FirstOptions: any = (): any => {
    return {
        tabBarLabel: '发现',
        headerShown: false,
        // tabBarIcon: ({ facus, color, size }) => {
        //     console.log(facus)
        //     return (
        //         <View><Icon name={'music-circle'} size={26} color={color} /></View>
        //     )
        // },
        tabBarBadge: null,
    }
}

export const SecondOptions: any = (): any => {
    return {
        tabBarLabel: '其他',
        headerShown: false,

        // tabBarIcon: ({ color, size }) => (
        //     <Icon name={'handyman'} size={26} color={color} />
        // ),
        tabBarBadge: null,
    }
}

export const DrawerOptions: any = (): any => {
    return {
        title: 'Noash-Ark',
        headerShown:false,
    }
}