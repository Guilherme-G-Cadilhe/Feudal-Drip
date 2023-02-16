import { takeLatest, all, call, put } from "typed-redux-saga/macro";
import { User } from "firebase/auth";

// USER
import { USER_ACTION_TYPES } from "./user.types";
import * as Action from "./user.action";

// FIREBASE
import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  signOutUser,
  createAuthUserWithEmailAndPassword,
  AdditionalInfo,
} from "../../utils/firebase/firebase.utils";

export function* getSnapshotFromUserAuth(userAuth: User, additionalInfo?: AdditionalInfo) {
  try {
    const userSnapshot = yield* call(createUserDocumentFromAuth, userAuth, additionalInfo);
    if (userSnapshot) yield* put(Action.signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield* put(Action.signInFailed(error as Error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield* call(signInWithGooglePopup);
    yield* call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield* put(Action.signInFailed(error as Error));
  }
}
export function* signInWithEmail({ payload: { email, password } }: Action.EmailSignInStart) {
  //action
  try {
    //const { email, password } = action.payload
    const userCredential = yield* call(signInAuthUserWithEmailAndPassword, email, password);
    if (userCredential) yield* call(getSnapshotFromUserAuth, userCredential.user);
  } catch (error) {
    yield* put(Action.signInFailed(error as Error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield* call(getCurrentUser);
    if (!userAuth) return;
    yield* call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield* put(Action.signInFailed(error as Error));
  }
}

export function* startSignOutUser() {
  try {
    yield* call(signOutUser);
    yield* put(Action.signOutSuccess());
  } catch (error) {
    yield* put(Action.signOutFailed(error as Error));
  }
}

export function* startSignUp({ payload: { email, password, displayName } }: Action.SignUpStart) {
  try {
    const userCredential = yield* call(createAuthUserWithEmailAndPassword, email, password);
    if (userCredential) yield* put(Action.signUpSuccess(userCredential.user, { displayName }));
  } catch (error) {
    yield* put(Action.signUpFailed(error as Error));
  }
}

export function* signInAfterSignUp(action: Action.SignUpSuccess) {
  //{ payload: { user, additionalDetails } }
  const { user, additionalDetails } = action.payload;
  yield* call(getSnapshotFromUserAuth, user, additionalDetails);
}

export function* onGoogleSignInStart() {
  yield* takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield* takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}
export function* onCheckUserSession() {
  yield* takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onUserSignOut() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, startSignOutUser);
}

export function* onSignUpStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_START, startSignUp);
}

export function* onSignUpSuccess() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* userSaga() {
  yield* all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onUserSignOut),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
