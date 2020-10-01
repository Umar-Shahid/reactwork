import React from 'react';
import './App.css';
import Room from './Room';

function App({name,age}) {
   return <div>Hello <strong>{name}</strong>!
   <h2 className="h2">I am {age-1} years old.</h2><div>
      <Room></Room>
   </div>
      </div>
}

export default App;
