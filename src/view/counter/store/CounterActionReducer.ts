import {CounterType} from "../../../store/ReducerTypes";
import {DECREMENT, INCREMENT, ModifyAction} from "./ActionCreators";

const init = {
    number: 0
}

export default (state: CounterType = init, action: ModifyAction): CounterType => {
    switch (action.type) {
        case INCREMENT:
            return {number: state.number + 1}
        case DECREMENT:
            return {number: state.number - 1}
        default:
            return state;
    }
}