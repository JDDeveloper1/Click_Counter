/* eslint-disable jsx-a11y/img-redundant-alt */
//Imports React-pack
import { useState } from 'react';

//Import components
import ButtonClick from './components/button';
import Counters from './components/counter';
// import CSS
import './App.css';
import logotipo from './images/logotipo.png';
import logoPng from './images/click.png';



function App() {

  const [ numClicks, setNumClicks ] = useState(0); 

  const clicked = () => {
    // console.log("click handler");
    setNumClicks(numClicks + 1);

  }

  const resetCounters = () => {
    // console.log("reset counters");
    setNumClicks(0);
  }

  return (
    <div className='App'>

      {/* logo */}
      <div className='container-logo'>
      <img 
        className='logo'
        src={logotipo}
        alt='Logo Image' 
        />
      </div>

      {/* container main */}
      <div className='container-main'>

      <Counters numClicks={numClicks} />

      <img 
        className='clickme'
        src={logoPng}
        alt='Logo Image' 
        />

        {/* buttons */}
        <ButtonClick 
          textButton='Click counter'
          buttonCLicked={true}
          handleClick={clicked}
        />
        <ButtonClick
          textButton='Reset counter'
          buttonCLicked={false}
          handleClick={resetCounters}
        />

      </div>

    </div>
  );
}

export default App;
