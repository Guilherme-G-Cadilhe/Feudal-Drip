import { useEffect, lazy, Suspense } from "react";

import { Routes, Route } from 'react-router-dom'


// import Navigation from './routes/navigation/navigation.component'
// import Home from './routes/home/home.component'
// import Shop from './routes/shop/shop.component'
import Spinner from "./components/spinner/spinner.component";
// import Authentication from './routes/authentication/authentication.component'
// import Checkout from './routes/checkout/checkout.component'

// ======= Setting User =======
import { useDispatch } from 'react-redux'
// import { onAuthStateChangedListener, createUserDocumentFromAuth, getCurrentUser } from "./utils/firebase/firebase.utils";
// import { setCurrentUser } from './store/user/user.action'

// ====== Setting user Redux-Saga ======
import { checkUserSession } from './store/user/user.action'

const Navigation = lazy(() => import('./routes/navigation/navigation.component'))
const Checkout = lazy(() => import('./routes/checkout/checkout.component'))
const Authentication = lazy(() => import('./routes/authentication/authentication.component'))
const Shop = lazy(() => import('./routes/shop/shop.component'))
const Home = lazy(() => import('./routes/home/home.component'))

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
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>

  );
};

export default App;
