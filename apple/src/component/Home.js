import React from 'react';
import Stars from "../component/star.jpg"
import styled from 'styled-components'
import Navigation from './Navigation';





const Home = () => {
    return (
        <div>
          <h2>Lime</h2>
          <Navigation />
          <img src={Stars} alt='stars' />
        </div>
    )
}

export default Home
