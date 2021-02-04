import { DRESS_WHITE_OR_BLACK } from '../types'

const initialState = {
    isBlack: false  //全局皮肤 
};

export default function dress(state: any = initialState, action: any = {}, others?: any){
    switch(action.type){
        case DRESS_WHITE_OR_BLACK:
            console.log(action.preload)
            return {
                ...state,
                isBlack:action.preload.isBlack
            }
            break;

        default:
            return state;
    }
}