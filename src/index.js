import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const DATA = [
  {
    id: '1',
    artist: 'Muse',
    title: 'Starlight',
    lyrics:
      '1Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ex omnis architecto aut aliquid sunt quisquam, rem minus mollitia voluptatem sapiente excepturi illum quos, officia repellat aspernatur. Assumenda, deleniti earum',
  },
  {
    id: '2',
    artist: 'Muse',
    title: 'Uprising',
    lyrics:
      '2Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ex omnis architecto aut aliquid sunt quisquam, rem minus mollitia voluptatem sapiente excepturi illum quos, officia repellat aspernatur. Assumenda, deleniti earum',
  },
  {
    id: '3',
    artist: 'Muse',
    title: 'Plug In Baby',
    lyrics:
      '3Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ex omnis architecto aut aliquid sunt quisquam, rem minus mollitia voluptatem sapiente excepturi illum quos, officia repellat aspernatur. Assumenda, deleniti earum',
  },
];
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
{
  /* <App data={DATA} /> */
}
