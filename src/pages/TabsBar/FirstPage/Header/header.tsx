import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Header: any = (props: any) => {
    const { navigation } = props
    const handlePress = () => {
        navigation.openDrawer();
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Icon name={"playlist-music"} size={26} onPress={handlePress} />
            </TouchableOpacity>

            <TextInput autoFocus={false} style={styles.inpbox} />
            
            <TouchableOpacity>
                <Icon name={'microphone-variant'} size={26} />
            </TouchableOpacity>
        </View>
    )
}
export default Header
const styles: any = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        maxHeight: 100,
        backgroundColor: 'rgba(255,255,255,0.5)',
        paddingVertical: 5
    },
    inpbox: {
        marginHorizontal: 20,
        backgroundColor: '#ffffff',
        flex: 1,
        paddingVertical: 6,
        borderRadius: 20,
    }
})