import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../state/counter/counterSlice";

const Counter = ()  => {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch() ;



    return (
        <div>
            <div>{count}</div> 
            <div>
                <button onClick={() => dispatch(increment())} >Increment</button>
                <button onClick={() => dispatch(decrement())} >Decrement</button>
            </div>
        </div>
    )
}

export default Counter ;