import { useEffect } from "react";

import { Routes, Route } from 'react-router-dom'


import Navigation from './routes/navigation/navigation.component.jsx'
import Home from './routes/home/home.component.jsx'
import Shop from './routes/shop/shop.component.jsx'
import Authentication from './routes/authentication/authentication.component.jsx'
import Checkout from './routes/checkout/checkout.component.jsx'

// ======= Setting User =======
import { useDispatch } from 'react-redux'
// import { onAuthStateChangedListener, createUserDocumentFromAuth, getCurrentUser } from "./utils/firebase/firebase.utils";
// import { setCurrentUser } from './store/user/user.action'

// ====== Setting user Redux-Saga ======
import { checkUserSession } from './store/user/user.action'

const App = () => {
  const dispatch = useDispatch()

  // ======== USER WITH REDUX SAGA========
  useEffect(() => {
    dispatch(checkUserSession())
  }, [])

  // // ======== USER ========
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChangedListener(async (user) => {
  //     if (user) {
  //       await createUserDocumentFromAuth(user)
  //     }
  //     dispatch(setCurrentUser(user))
  //   })
  //   return unsubscribe
  // }, [])


  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>

  );
};

export default App;
