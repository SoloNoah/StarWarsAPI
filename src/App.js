import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import ChosenFilmCard from './components/ChosenFilm/ChosenFilmCard';
import TOC from './components/TOC/TOC';

function App() {
  return (
    <Provider store={store}>
      <div className='app'>
        <TOC />
        <ChosenFilmCard />
      </div>
    </Provider>
  );
}

export default App;
