import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
const Drawer = createDrawerNavigator();
import TabRouter from './tabs'
import DrawerSlider from '../components/DrawerSlider/DrawerSlider'

const DrawerView = () =>{
    return (
        <DrawerSlider/>
    )
}

 const DrawerRouter: any = (): any => {
    return (
        <Drawer.Navigator drawerType="slide" drawerStyle={{width:'85%'}} drawerContent={DrawerView}>
            <Drawer.Screen name="DrawerOne" component={TabRouter} />
        </Drawer.Navigator>
    )
}

export default DrawerRouter