import React, { useCallback, memo, useState } from 'react'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity, Text, StyleSheet, View, Switch } from 'react-native'
import DrawerSliderItemProp from './DrawerSliderItemProp'

const DrawerSliderItem: React.FC<DrawerSliderItemProp> = (props: any) => {
    const [enable, setEnable] = useState(false)
    const { name, iconName, onClick = () => { }, code, id, isBorder = true, showSwitch = false, onChange = () => { } } = props
    const handleClick = useCallback((): void => {
        onClick(code)
    }, [code])
    const toggleSwitch = () => setEnable(previousState => {
        onChange(!previousState)
        return !previousState
    });
    return (
        <TouchableOpacity key={id} onPress={handleClick} style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name={iconName} size={26} color="rgba(0,0,0,0.7)" />
                <Text style={{ fontSize: 16, color: '#000', fontWeight: '300', marginLeft: 10 }}>{name}</Text>
            </View>
            {showSwitch ? <Switch trackColor={{ true: '#FF0000', false: 'rgba(255,255,255,0.5)' }} value={enable} onValueChange={toggleSwitch} style={{ marginRight: 12 }} /> : <MIcon name="chevron-right" size={24} color='#B88C73' style={{ marginRight: 5 }} />}
            {isBorder ? <View style={styles.line}></View> : null}
        </TouchableOpacity>
    )
}
export default memo(DrawerSliderItem)
const styles: any = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // paddingHorizontal:
        paddingLeft: 15,
        paddingVertical: 8,
        position: 'relative',
    },
    line: {
        width: '100%',
        height: 0.3,
        backgroundColor: 'rgba(0,0,0,0.1)',
        position: 'absolute',
        bottom: 0,
        left: 15,
    }
})