import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import {FirstPage,SecondPage} from './page'

import { FirstOptions } from './options'

const Tab:any = createBottomTabNavigator();

// const { Navigator,Screen } = Tab

const TabRouter:any = ()=>{
    return (
        <Tab.Navigator>
            <Tab.Screen name="First" component={FirstPage} options={FirstOptions} />
            <Tab.Screen name="Second" component={SecondPage} />
        </Tab.Navigator>
    )
}

export default TabRouter