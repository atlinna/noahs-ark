// 导入stack 依赖
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
// 导入 page component 组件
import HomePage from '../pages/HomePage/HomePage'
import DetailPage from '../pages/DetailPage/DetailPage'

const Stack = createStackNavigator();

const StackRouter = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="Detail" component={DetailPage} />
        </Stack.Navigator>
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