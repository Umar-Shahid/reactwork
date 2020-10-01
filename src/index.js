import React from 'react';
import ReactDOM from 'react-dom';
import './practice.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div><App name="Umar" age={25}/><div><h1 className="h1">Welcome to React</h1><br></br>
  <ul>
     <li className="li">Why<ol className="ol">
           <li>Eficient</li>
           <li>Reliable</li>
           <li>Customizable</li>
        </ol>
     </li>
     <li>How</li>
     <li>Where</li>
  </ul>
</div>

</div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
