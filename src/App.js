import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Card from './Components/Card';


import '../src/Assets/styles/App.scss';

export default function App(){
  return (
     <div className="App">
        <Navbar />
        <Hero />
        <Card rating="5.0"
           img="img_avatar3.png"
           reviewCount={6}
           country="USA"
           title="Life Lessons with Zaferes"
           price={136}
        />
    </div>
  )
}


