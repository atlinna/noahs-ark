import React from 'react'

import { View, Text } from 'react-native'

export interface HelloProps {
    name?: string,
    handleClick: any
}

const Hello: React.FC<HelloProps> = props => {
    // const name = 'noras-ark'
    const { name, handleClick } = props
    
    return (
        <View >
            <Text onPress={handleClick}>Hello world!!!  this is {name} first life!</Text>
        </View>
    )
}

export default Hello