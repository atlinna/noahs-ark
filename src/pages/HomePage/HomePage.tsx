import React from 'react'

import { View, Text } from 'react-native'

const HomePage = (props: any) => {
    const { navigation } = props
    const handleClick = () => {
        navigation.navigate('Detail')
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text onPress={handleClick}>这里是第一个页面</Text>
        </View>
    );
}

export default HomePage