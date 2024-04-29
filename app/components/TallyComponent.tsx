import React from 'react'
import Counter from './Counter'

function TallyComponent(props:any) {

    return (
        <div className="tally-component">
            <div className='name'>{props.name}</div>
            <Counter name={'Deaths'} count={props.deathCount} counterIncrement={props.deathCounterIncrement} counterDecrement={props.deathCounterDecrement}/>
            <Counter name={'Wipes'} count={props.wipeCount} counterIncrement={props.wipeCounterIncrement} counterDecrement={props.wipeCounterDecrement}/>
        </div>
    )
}

export default TallyComponent