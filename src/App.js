import './App.css';
import React from 'react';
import Video from './Video';
// This above vedio v is in upper case

function App() {
  return (
    <div className="app">
      <div className='app__videos'>
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
