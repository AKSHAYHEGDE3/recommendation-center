import React from 'react'
import { Button } from 'reactstrap';
import { useState } from 'react';
import Animelist from '../src/components/Animelist';
import Serieslist from '../src/components/Serieslist';
import Movielist from '../src/components/Movielist';
import './index.css';



function App() {

  const [animeshow,setAnimeshow]= useState(false)
  const [seriesshow,setSeriesshow]= useState(false)
  const [movieshow,setMovieshow]= useState(false)

  const animeHandler= ()=>{
      setAnimeshow(!animeshow)
      setSeriesshow(false)
      setMovieshow(false)
  }

  const seriesHandler= ()=>{
      console.log('clicked')
      setSeriesshow(!seriesshow)
      setAnimeshow(false)
      setMovieshow(false)
  }

  const movieHandler= ()=>{
    console.log('clicked')
    setMovieshow(!movieshow)
    setAnimeshow(false)
    setSeriesshow(false)
}

  return (
    <div>
      <section style={{"textAlign":"center","paddingTop":"2rem","paddingBottom":"2rem","color":"white","fontSize":"2rem","backgroundColor":"#272727"}}>
        <p>are you bored,want to binge something?</p>
        <p>you can see this recommendations</p>
        <Button color="primary mx-3" onClick={()=>animeHandler()}>Animes</Button>
        <Button color="primary mx-3" onClick={()=>seriesHandler()}>Series</Button>
        <Button color="primary mx-3" onClick={()=>movieHandler()}>Movies</Button>
      </section>
      <div className="recommendationList">
               {(animeshow && <Animelist />) || (seriesshow && <Serieslist />) || (movieshow && <Movielist />)  }
      </div>

    </div>
  );
}

export default App;
