import React from 'react'

function Counter(props: any) {
    return (
        <div className="counter-container w-1/3 h-full flex justify-around items-center">
            <div className='counter-name'>{props.name}:</div>
            <div className='count w-1/6 text-center text-xl font-bold'>{props.count}</div>
            <div className='button-container flex w-1/3 justify-start'>
                <button className='w-40 bg-blue-500 hover:bg-blue-400 text-black font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded' onClick={() => props.counterDecrement()}>-</button>
                <button className='w-40 ml-5 bg-blue-500 hover:bg-blue-400 text-black font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded' onClick={() => props.counterIncrement()}>+</button>
            </div>
        </div>
    )
}

export default Counter