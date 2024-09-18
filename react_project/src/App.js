import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='home'>
        hello this is my home page 
      </div>
    </div>
  );
}

export default App;
