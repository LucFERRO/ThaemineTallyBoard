import React from 'react'

function Counter(props: any) {
    return (
        <div className="counter-container">
            <div className='counter-name'>{props.name}:</div>
            <div className='count'>{props.count}</div>
            <div className='button-container'>
                <button onClick={() => props.counterDecrement()}>-</button>
                <button onClick={() => props.counterIncrement()}>+</button>
            </div>
        </div>
    )
}

export default Counter