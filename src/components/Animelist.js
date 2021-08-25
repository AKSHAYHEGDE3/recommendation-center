import React from 'react'
import {data1} from './data1'

function Animelist(props) {
    return (
        <>
           {data1.map((animeName)=>{
               return <div key={animeName.id} className='box'>
                   <img src={animeName.url} alt={animeName.name} />
                   <h4>{animeName.name.toUpperCase()}</h4>
                   <h5>Rating:{animeName.rating}</h5>
               </div>
           }
           )} 
        </>
    )
}


export default Animelist

