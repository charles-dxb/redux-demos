/**
 * Created by Teddy on 2017/2/13.
 */
import {INCREMENT,DECREMENT} from '../Constants/ActionTypes'

export default function movement(state = {value : 0}, action) {
    switch (action.type){
        case INCREMENT:
            return {value: (state.value + 1)};
        case DECREMENT:
            return {value: (state.value - 1)};
        default:
            return state;
    }
}