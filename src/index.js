import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Card from './Card';
import 'tachyons';

ReactDOM.render(
   <div>
	<Card />
	<Card />
	<Card />
   </div>,
   document.getElementById('root')); 

serviceWorker.unregister();
