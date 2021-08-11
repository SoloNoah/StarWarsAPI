import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import ChosenFilm from './components/ChosenFilm/ChosenFilm';
import TOC from './components/TOC/TOC';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <TOC />
        <ChosenFilm />
      </div>
    </Provider>
  );
}

export default App;
