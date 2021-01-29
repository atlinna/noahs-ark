import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import DetailScreen from '../pages/DetailPage/DetailPage';
const Drawer = createDrawerNavigator();
import { HomePage,DetailPage } from './page'
import TabRouter from './tabs'
import DrawerSlider from '../components/DrawerSlider/DrawerSlider'


 const DrawerRouter: any = (): any => {
    return (
        <Drawer.Navigator drawerType="slide" drawerStyle={{width:'70%'}} drawerContent={DrawerSlider}>
            <Drawer.Screen name="DrawerOne" component={TabRouter} />
        </Drawer.Navigator>
    )
}

export default DrawerRouter