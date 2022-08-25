// ======== Main ========
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

//======== Redux ========
import { Provider } from 'react-redux';
import { store, persistor } from '../src/store/store'


// ======== Estilos ========
import "./global.styles.scss"

// ======== Persist ========
import { PersistGate } from 'redux-persist/integration/react'

//  ======== Stripe ========
import { Elements } from '@stripe/react-stripe-js'
import { stripePromise } from './utils/stripe/stripe.utils'


// ======== Aplicação ========
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

