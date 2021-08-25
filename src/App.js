import React from 'react'
import { Button } from 'reactstrap';
import { useState } from 'react';
import Animelist from '../src/components/Animelist';
import Serieslist from '../src/components/Serieslist';
import './index.css';


function App() {

  const [animeshow,setAnimeshow]= useState(false)
  const [seriesshow,setSeriesshow]= useState(false)

  const animeHandler= ()=>{
      setAnimeshow(!animeshow)
      setSeriesshow(false)
  }

  const seriesHandler= ()=>{
      console.log('clicked')
      setSeriesshow(!seriesshow)
      setAnimeshow(false)
  }


  return (
    <div>
      <section style={{"textAlign":"center","paddingTop":"2rem","paddingBottom":"2rem","color":"white","fontSize":"2rem","backgroundColor":"#272727"}}>
        <p>are you bored,want to binge something?</p>
        <p>you can see this recommendations</p>
        <Button color="primary mx-3" onClick={()=>animeHandler()}>Anime</Button>
        <Button color="primary mx-3" onClick={()=>seriesHandler()}>Series</Button>
      </section>
      <div className="recommendationList">
               {(animeshow && <Animelist />) || (seriesshow && <Serieslist />) }
      </div>

    </div>
  );
}

export default App;
