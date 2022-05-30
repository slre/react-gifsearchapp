import React from 'react';
//import ReactDOM from 'react-dom/client'; // REACT 17+
import ReactDOM from 'react-dom'; // react 16
import GifExpertApp from './GifExpertApp';
import './index.css';

// React 17+
/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GifExpertApp />
);
*/
// React 16

const divRoot = document.querySelector('#root');
ReactDOM.render( <GifExpertApp  />,divRoot);
//import reportWebVitals from './reportWebVitals';
