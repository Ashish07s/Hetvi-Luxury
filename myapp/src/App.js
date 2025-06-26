import React from "react";
import Exibition from "./Exibition";
import bg from './background.jpg';

const style = {
  backgroundImage: `url(${bg})`,
  backgroundSize: 'cover',
  minHeight: '100vh',
};

const App= () => {
  return(
    <div style={style}>
      <Exibition/>
    </div>
  )
}

export default App;
