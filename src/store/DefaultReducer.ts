import {combineReducers} from 'redux';
import CounterActionReducer from "../view/counter/store/CounterActionReducer";

const reducer = combineReducers({
    counter: CounterActionReducer
})

export default reducer;