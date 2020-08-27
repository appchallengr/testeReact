import React from 'react';
import Checklist from './components/CheckList'
import './App.css';
import { Provider } from 'react-redux';
import rootReducer from './redux/rootReducer';
import configureStore from './redux/configureStore';

const store = configureStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <Checklist></Checklist>
    </Provider>
    
  );
}

export default App;
