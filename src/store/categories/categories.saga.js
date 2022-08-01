import { takeLatest, all, call, put } from 'redux-saga/effects';
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import { fetchCategoriesSuccess, fetchCategoriesFailed } from './categories.action'
import { CATEGORIES_ACTION_TYPES } from './categories.types';


export function* fetchCategoriesAsync() {
  try {
    // call = same as await in a async function, calls the function method, and sends the args, and then waits for results
    const categoriesArray = yield call(getCategoriesAndDocuments, 'categories')
    // put = Dispatch em um reduce, ele manda os dados para o Root Reducer
    yield put(fetchCategoriesSuccess(categoriesArray))

  } catch (error) {
    // put = Dispatch em um reduce, ele manda os dados para o Root Reducer
    yield put(fetchCategoriesFailed(error))
  }
}

export function* onFetchCategories() {
  yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync)
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)])
}