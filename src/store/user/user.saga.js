import { takeLatest, all, call, put } from 'redux-saga/effects';

// USER
import { USER_ACTION_TYPES } from './user.types';
import * as Action from './user.action';

// FIREBASE
import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  signOutUser,
  createAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils'

export function* getSnapshotFromUserAuth(userAuth, additionalInfo) {
  try {
    const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalInfo)
    yield put(Action.signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(Action.signInFailed(error))
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup)
    yield call(getSnapshotFromUserAuth, user)
  } catch (error) {
    yield put(Action.signInFailed(error))
  }
}
export function* signInWithEmail({ payload: { email, password } }) { //action
  try {
    //const { email, password } = action.payload
    const { user } = yield call(signInAuthUserWithEmailAndPassword, email, password)
    yield call(getSnapshotFromUserAuth, user)
  } catch (error) {
    yield put(Action.signInFailed(error))
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser)
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth)
  } catch (error) {
    yield put(Action.signInFailed(error))
  }
}

export function* startSignOutUser() {
  try {
    yield call(signOutUser)
    yield put(Action.signOutSuccess())
  } catch (error) {
    yield put(Action.signOutFailed(error))
  }
}

export function* startSignUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(createAuthUserWithEmailAndPassword, email, password)
    yield put(Action.signUpSuccess(user, { displayName }))
  } catch (error) {
    yield put(Action.signUpFailed(error))
  }
}

export function* signInAfterSignUp(action) { //{ payload: { user, additionalDetails } }
  const { user, additionalDetails } = action.payload
  yield call(getSnapshotFromUserAuth, user, additionalDetails)
}

export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}
export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onUserSignOut() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, startSignOutUser);
}

export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, startSignUp)
}

export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* userSaga() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onUserSignOut),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ])
}