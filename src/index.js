// ======== Main ========
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

//======== Redux ========
import { Provider } from 'react-redux';
import { store, persistor } from '../src/store/store'


///======== Estilos ========
import "./global.styles.scss"

//Persist
import { PersistGate } from 'redux-persist/integration/react'


// ======== Aplicação ========
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

