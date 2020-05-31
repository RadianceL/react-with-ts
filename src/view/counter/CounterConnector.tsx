import {IStoreState} from "../../store/ReducerTypes";
import {Dispatch} from "redux";
import {decrement, increment} from "./store/ActionCreators";
import {connect} from "react-redux";
import CounterView from "./CounterView";

const mapStateToProps = (status: IStoreState): { value: number } => ({
    value: status.counter.number
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onDecrement: () => dispatch(decrement()),
    onIncrement: () => dispatch(increment())
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterView)