import { PropTypes } from 'prop-types';

export default function CounterButton({by, incrementCounterInParent, decrementCounterInParent}) {

    return (
        <div className="CounterButton">
            <div>
                <button className="counterButton" onClick={() => incrementCounterInParent(by)}>+{by}</button>
                <button className="counterButton" onClick={() => decrementCounterInParent(by)}>-{by}</button>
            </div>
        </div>
    )
}

CounterButton.propTypes = { 
    by: PropTypes.number
}