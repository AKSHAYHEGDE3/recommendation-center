import React from 'react'
import {data2} from './data2'

function Serieslist(props) {
    return (
        <>
           {data2.map((seriesName)=>{
               return <div key={seriesName.id} className='box'>
                   <img src={seriesName.url} alt={seriesName.name} />
                   <h4>{seriesName.name}</h4>
                   <h5>Rating:{seriesName.rating}</h5>
               </div>
           }
           )} 
        </>
    )
}


export default Serieslist
