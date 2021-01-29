import React, { useCallback, memo } from 'react'
import Icon from "react-native-vector-icons/MaterialIcons"
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import DrawerSliderItemProp from './DrawerSliderItemProp'

const DrawerSliderItem: React.FC<DrawerSliderItemProp> = (props: any) => {
    const { name, iconName, onClick, code, id } = props
    const handleClick = useCallback((): void => {
        onClick(code)
    }, [code])
    return (
        <TouchableOpacity key={id} onPress={handleClick} style={styles.container}>
            <Icon name={iconName} size={28} color="skyblue" />
            <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
    )
}
export default memo(DrawerSliderItem)
const styles: any = StyleSheet.create({
    container: {
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: '#E9E9E9',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        margin: 3,
        // boxSizing:'border-box',
    },
    text: {
        color: 'teal',
        paddingTop: 10,
    }
})