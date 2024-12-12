import React from 'react'

import Header from './Header'
import MainComponent from './MainComponent'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import VideoGround from './VideoGround'
import SecondaryComponent from './SecondaryComponent'
import usePopularMovies from '../hooks/usePopularMovies'


const Home = () => {
  useNowPlayingMovies()
  usePopularMovies()
  
  return (

    <div className=''>
        <Header/>
        <MainComponent/>
      <SecondaryComponent/>
    </div>
  )
}

export default Home