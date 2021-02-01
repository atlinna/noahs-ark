import * as types from '../types/index';
import { Alert } from 'react-native'

const initialState = {
  isLoggedIn: false,//登陆状态
  user: {},
  status: null,//登陆操作状态 ‘done’:已登陆,'doing':正在登陆，null：没有登陆
  mes: 'thanks for your dinner'
};

//reducer处理函数更新state,渲染UI(主要根据传入旧的state,)
export default function user(state: any = initialState, action: any = {}, others?: any) {
  const { params } = action
  switch (action.type) {
    case types.LOGIN_ING:
      console.log('hello world')
      return {
        ...state,
        isLoggedIn: false,
        status: 'doing',
      }
      break;

    case 'LOGIN_MES':
      Alert.alert(`接受数据成功mes值为:${params.message}`)
      return {
        ...state,
        mes: params.message
      }
    //切莫忘记default返回值
    default:
      return state;
  }
}