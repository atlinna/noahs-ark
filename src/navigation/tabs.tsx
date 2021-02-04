import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import { FirstPage, SecondPage } from './page'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FirstOptions, SecondOptions } from './options'

const Tab: any = createBottomTabNavigator();

// const { Navigator,Screen } = Tab

const TabRouter: any = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
            screenOptions={({ route }: any) => ({
                tabBarIcon: ({ focused, color, size }: any) => {
                    let iconName;
                    if (route.name === 'First') {
                        iconName = focused
                            ? 'music-circle'
                            : 'music-circle-outline';
                    } else if (route.name === 'Second') {
                        iconName = focused ? 'currency-usd-circle' : 'currency-usd-circle-outline';
                    }

                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}
            headerShown={false}
        >
            <Tab.Screen name="First" component={FirstPage} options={FirstOptions} />
            <Tab.Screen name="Second" component={SecondPage} options={SecondOptions} />
        </Tab.Navigator>
    )
}

export default TabRouter