// 导入stack 依赖
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import React from 'react'
// 导入 page component 组件
import { HomePage, DetailPage, FloorPage, DrawerOne, DrawerTwo, DrawerThree, DrawerFour } from './page'
import { HomeOptions, FloorOptions, DrawerOptions } from './options'
// 导入 tabbar page 组件
// import TabRouter from './tabs'

// 导入 drawer page 组件
import DrawerRouter from './drawer'

const Stack: any = createStackNavigator();
const { Navigator, Screen } = Stack;
const Tab: any = createBottomTabNavigator();

const StackRouter = () => {
    return (
        <Navigator>
            <Screen name="Drawer" component={DrawerRouter} options={DrawerOptions} />
            <Screen name="Home" component={HomePage} options={HomeOptions} />
            <Screen name="Detail" component={DetailPage} />
            <Screen name="Floor" component={FloorPage} options={FloorOptions} />
            <Screen name="DraOne" component={DrawerOne} />
            <Screen name="DrawerTwo" component={DrawerTwo} />
            <Screen name="DrawerThree" component={DrawerThree} />
            <Screen name="DrawerFour" component={DrawerFour} />
        </Navigator>
    )
}

const RouteContainer = () => {
    return (
        <NavigationContainer>
            {/* <TabRoute/> */}
            <StackRouter />
        </NavigationContainer>
    )
}

export default RouteContainer