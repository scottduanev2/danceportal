import React from 'react';
import { Provider } from 'react-redux';
import Header from './Header';
import PortalWrapper from './PortalWrapper';
import configureStore from '../configureStore';
const store = configureStore();

class App extends React.Component {

  render () {
    return (
      <Provider store={ store }>
        <Header />
        <PortalWrapper />
      </Provider>
    );
  }
}

export default App;
