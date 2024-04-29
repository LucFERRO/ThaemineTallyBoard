import React from 'react'
import Counter from './Counter'

function TallyComponent(props: any) {

    return (
        <div className="tally-component flex justify-around items-center w-full h-full ">
            <input type="text" id="base-input" defaultValue={props.name} className=" bg-defaultBg w-1/10 text-xl focus:ring-blue-500 focus:border-blue-500 p-2.5"></input>
            <Counter name={'Deaths'} count={props.deathCount} counterIncrement={props.deathCounterIncrement} counterDecrement={props.deathCounterDecrement} />
            <Counter name={'Wipes'} count={props.wipeCount} counterIncrement={props.wipeCounterIncrement} counterDecrement={props.wipeCounterDecrement} />
        </div>
    )
}

export default TallyComponent