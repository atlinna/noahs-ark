import React, { useCallback } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { connect } from 'react-redux';//将我们的页面和action链接起来

const FirstPage: any = (props: any) => {

    // console.log(props)
    const { navigation, dispatch, counter = {} } = props

    const { mes = "" } = counter

    const handleClick: any = (): void => {
        navigation.navigate('Home')
    }

    const handleBtnClick: Function = useCallback((): void => {
        // console.log(props)
        dispatch({
            type: 'LOGIN_MES',
            handleClick: handleClick,
            params: { message: 'hello 这里是测试redux参数传递' }
        })
    }, [])

    const handleAnimatePage = ():void =>{
        navigation.navigate('AnimateOne')
    }
    return (
        <>
            <View style={styles.container}>
                <Text>{mes}</Text>
                <Text onPress={handleClick}>这里是第一个TabBar 导航</Text>
                <Button title="测试redux" onPress={handleBtnClick} />
                <Button title="测试动画" onPress={handleAnimatePage} />
            </View>
        </>
    )
}

const styles: any = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default connect(({ counter }: any) => {
    return { counter }
})(FirstPage)