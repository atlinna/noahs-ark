import React from 'react'

import { View, Text } from 'react-native'

const HomePage = (props: any) => {
    const { navigation } = props
    const handleClick = (params:string):void => {
        navigation.navigate(params)
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"#fff" }}>
            <Text onPress={()=>handleClick('Detail')}>跳转到Detail页面</Text>
            <Text onPress={()=>handleClick('Floor')}>跳转到Floor页面</Text>
        </View>
    );
}

export default HomePage