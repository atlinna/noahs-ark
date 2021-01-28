// 导入stack 依赖
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
// 导入 page component 组件
import { HomePage,DetailPage,FloorPage } from './page'
import { HomeOptions,FloorOptions } from './options'

const Stack:any = createStackNavigator();
const { Navigator,Screen } = Stack;

const StackRouter = () => {
    return (
        <Navigator>
            <Screen name="Home" component={HomePage} options={HomeOptions}/>
            <Screen name="Detail" component={DetailPage} />
            <Screen name="Floor" component={FloorPage} options={FloorOptions} />
        </Navigator>
    )
}

const RouteContainer = () => {
    return (
        <NavigationContainer>
            <StackRouter />
        </NavigationContainer>
    )
}

export default RouteContainer