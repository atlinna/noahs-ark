import React from 'react'
import { Button, Alert, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';


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
        tabBarLabel: '首页',
        tabBarIcon: ({ color, size }) => (
            <Icon  name={'home'} size={26} color={color} />
        ),
        tabBarBadge: null,
    }
}

export const SecondOptions: any = (): any => {
    return {
        tabBarLabel: '其他',
        tabBarIcon: ({ color, size }) => (
            <Icon  name={'handyman'} size={26} color={color} />
        ),
        tabBarBadge: null,
    }
}

export const DrawerOptions:any = ():any=>{
    return {
        title:'Noash-Ark'
    }
}