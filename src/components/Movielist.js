import React from 'react'
import {data3} from './data3'

const Movielist = (props) => {
    return (
        <> 
           {data3.map((movieName)=>{
               return <div key={movieName.id} className='box'>
                   <img src={movieName.url} alt={movieName.name} />
                   <h4>{movieName.name.toUpperCase()}</h4>
                   <h5>Rating:{movieName.rating}</h5>
               </div>
           }
           )} 
         
        </>
    )
}

export default Movielist
