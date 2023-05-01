import React from 'react';
import Card from '../components/card/Card';
import placholder from '../assets/placeholder.png';
import SubHeader from '../components/SubHeader/SubHeader';

const Home = () => {
  return (
    <div>
      <SubHeader text={'Popular Titles'}/>
      <div className='cardContainer'>
        <Card 
          backgroundImg={placholder}
          title={'Popular series'} 
          overlayTitle={'series'}
          link={'/series'}
          />
        <Card
          backgroundImg={placholder}
          title={'Popular Movies'} 
          overlayTitle={'movies'} 
          link={'/movies'}
        />
      </div>
    </div>
  )
}

export default Home