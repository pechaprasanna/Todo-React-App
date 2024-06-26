import { useState } from 'react';
import CounterButton from './CounterButton'
import './Counter.css'

export default function Counter() {

    const [count, setCount] = useState(0)

    function incrementCounterInParent(by) {
        setCount(count+by);
    }

    function decrementCounterInParent(by) {
        setCount(count-by);
    }
    function resetCounterInParent() {
        setCount(0);
    }

    return (
        <div>
            <span className="counter">{count}</span>
            <CounterButton 
                by={1} 
                incrementCounterInParent={incrementCounterInParent} 
                decrementCounterInParent={decrementCounterInParent}/>
            <CounterButton 
                by={2} 
                incrementCounterInParent={incrementCounterInParent} 
                decrementCounterInParent={decrementCounterInParent}/>
            <CounterButton 
                by={5} 
                incrementCounterInParent={incrementCounterInParent} 
                decrementCounterInParent={decrementCounterInParent}/>
            <button className="resetButton" onClick={resetCounterInParent}>Reset</button>
        </div>
    )
}

