"use client";
import React , { useState , useEffect }from 'react'
import TallyComponent from './TallyComponent'

function Thaemine() {

    const [player1DeathCount, setPlayer1DeathCount] = useState(0);
    const [player2DeathCount, setPlayer2DeathCount] = useState(0);
    const [player3DeathCount, setPlayer3DeathCount] = useState(0);
    const [player4DeathCount, setPlayer4DeathCount] = useState(0);
    const [player5DeathCount, setPlayer5DeathCount] = useState(0);
    const [player6DeathCount, setPlayer6DeathCount] = useState(0);
    const [player7DeathCount, setPlayer7DeathCount] = useState(0);
    const [player8DeathCount, setPlayer8DeathCount] = useState(0);

    const [player1WipeCount, setPlayer1WipeCount] = useState(0);
    const [player2WipeCount, setPlayer2WipeCount] = useState(0);
    const [player3WipeCount, setPlayer3WipeCount] = useState(0);
    const [player4WipeCount, setPlayer4WipeCount] = useState(0);
    const [player5WipeCount, setPlayer5WipeCount] = useState(0);
    const [player6WipeCount, setPlayer6WipeCount] = useState(0);
    const [player7WipeCount, setPlayer7WipeCount] = useState(0);
    const [player8WipeCount, setPlayer8WipeCount] = useState(0);

    return (
        <div className='w-full h-full flex flex-col items-center'>
            <h1 className='mt-10 pb-10 text-2xl font-bold'>Thaemine Tally Board</h1>

            <div className='w-full h-full flex flex-col items-center'>
                <TallyComponent name={'DJ'} deathCount={player1DeathCount} wipeCount={player1WipeCount} deathCounterIncrement={()=>setPlayer1DeathCount(player1DeathCount+1)} deathCounterDecrement={() => setPlayer1DeathCount(player1DeathCount-1)} wipeCounterIncrement={() => setPlayer1WipeCount(player1WipeCount+1)} wipeCounterDecrement={() => setPlayer1WipeCount(player1WipeCount-1)}/>
                <TallyComponent name={'Hefty'} deathCount={player2DeathCount} wipeCount={player2WipeCount} deathCounterIncrement={()=>setPlayer2DeathCount(player2DeathCount+1)} deathCounterDecrement={() => setPlayer2DeathCount(player2DeathCount-1)} wipeCounterIncrement={() => setPlayer2WipeCount(player2WipeCount+1)} wipeCounterDecrement={() => setPlayer2WipeCount(player2WipeCount-1)}/>
                <TallyComponent name={'Grog'} deathCount={player3DeathCount} wipeCount={player3WipeCount} deathCounterIncrement={()=>setPlayer3DeathCount(player3DeathCount+1)} deathCounterDecrement={() => setPlayer3DeathCount(player3DeathCount-1)} wipeCounterIncrement={() => setPlayer3WipeCount(player3WipeCount+1)} wipeCounterDecrement={() => setPlayer3WipeCount(player3WipeCount-1)}/>
                <TallyComponent name={'Annot'} deathCount={player4DeathCount} wipeCount={player4WipeCount} deathCounterIncrement={()=>setPlayer4DeathCount(player4DeathCount+1)} deathCounterDecrement={() => setPlayer4DeathCount(player4DeathCount-1)} wipeCounterIncrement={() => setPlayer4WipeCount(player4WipeCount+1)} wipeCounterDecrement={() => setPlayer4WipeCount(player4WipeCount-1)}/>
                <TallyComponent name={'Prupru'} deathCount={player5DeathCount} wipeCount={player5WipeCount} deathCounterIncrement={()=>setPlayer5DeathCount(player5DeathCount+1)} deathCounterDecrement={() => setPlayer5DeathCount(player5DeathCount-1)} wipeCounterIncrement={() => setPlayer5WipeCount(player5WipeCount+1)} wipeCounterDecrement={() => setPlayer5WipeCount(player5WipeCount-1)}/>
                <TallyComponent name={'Zul'} deathCount={player6DeathCount} wipeCount={player6WipeCount} deathCounterIncrement={()=>setPlayer6DeathCount(player6DeathCount+1)} deathCounterDecrement={() => setPlayer6DeathCount(player6DeathCount-1)} wipeCounterIncrement={() => setPlayer6WipeCount(player6WipeCount+1)} wipeCounterDecrement={() => setPlayer6WipeCount(player6WipeCount-1)}/>
                <TallyComponent name={'Armando'} deathCount={player7DeathCount} wipeCount={player7WipeCount} deathCounterIncrement={()=>setPlayer7DeathCount(player7DeathCount+1)} deathCounterDecrement={() => setPlayer7DeathCount(player7DeathCount-1)} wipeCounterIncrement={() => setPlayer7WipeCount(player7WipeCount+1)} wipeCounterDecrement={() => setPlayer7WipeCount(player7WipeCount-1)}/>
                <TallyComponent name={'Azraielle'} deathCount={player8DeathCount} wipeCount={player8WipeCount} deathCounterIncrement={()=>setPlayer8DeathCount(player8DeathCount+1)} deathCounterDecrement={() => setPlayer8DeathCount(player8DeathCount-1)} wipeCounterIncrement={() => setPlayer8WipeCount(player8WipeCount+1)} wipeCounterDecrement={() => setPlayer8WipeCount(player8WipeCount-1)}/>
            </div>
        </div>
    )
}

export default Thaemine