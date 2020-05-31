import * as React from 'react';

export interface IProps {
    value: number,
    onIncrement: () => void,
    onDecrement: () => void;
}

const CounterView = ({value, onIncrement, onDecrement}: IProps) => {
    return (
        <div>
            <p>
                Clicked: {value} times
                <br/>
                <button onClick={onIncrement} style={{marginRight: 20}}> +</button>
                <button onClick={onDecrement}> -</button>
            </p>
        </div>
    )
}

export default CounterView;