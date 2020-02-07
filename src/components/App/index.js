/* global chrome */
import React from 'react';
import './App.css';
import {Provider}                       from 'react-redux'
import store                            from '../../redux'

import BookmarkManager from 'components/BookmarkManager'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      {!chrome && <h1>not in chrome extension context</h1>}
      {chrome && <BookmarkManager/>}


    </div>
    </Provider>
  );
}

export default App;
