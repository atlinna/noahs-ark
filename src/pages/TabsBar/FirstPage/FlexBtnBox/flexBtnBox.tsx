import React from 'react'
import { View, Text, StyleSheet, ScrollView ,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FlexBtnBox: any = (props: any) => {
    const { dataSource } = props
    return (
        <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
            {
                dataSource.map(item => {
                    return (
                        <TouchableOpacity style={styles.layout} key={item.id} >
                            <View style={styles.iconFont}>
                                <Icon name={item.iconName} size={26} color="red" />
                            </View>
                            <Text style={{ color: 'black', fontSize: 13, fontWeight: '200' }}>{item.name}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>
    )
}
export default FlexBtnBox
const styles: any = StyleSheet.create({
    layout: {
        alignItems: 'center',
        marginRight:20
    },
    iconFont: {
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: 30,
        marginBottom:3,
    },
    container: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        flexDirection:'row',
        paddingHorizontal:16,
        borderBottomWidth:1,
        borderBottomColor:'#E0E0E0',
        paddingVertical:15
    }
})