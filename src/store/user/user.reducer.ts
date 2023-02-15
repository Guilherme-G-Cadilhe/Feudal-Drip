import { AnyAction } from "redux";

import { USER_ACTION_TYPES } from "./user.types";

import { signInFailed, signUpFailed, signOutFailed, signOutSuccess, signInSuccess } from "./user.action";

import { UserData } from "../../utils/firebase/firebase.utils";

export type UserState = {
  readonly currentUser: null | UserData;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INITIAL_USER_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_USER_STATE, action = {} as AnyAction) => {
  if (signInSuccess.match(action)) return { ...state, currentUser: action.payload };
  if (signOutSuccess.match(action)) return { ...state, currentUser: null };
  if (signInFailed.match(action) || signOutFailed.match(action) || signUpFailed.match(action))
    return { ...state, error: action.payload };

  return state;
};
