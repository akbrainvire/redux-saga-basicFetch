import { call, put, takeEvery } from "redux-saga/effects";

// put(action) Creates an Effect description that instructs the middleware
// to schedule the dispatching of an action to the store. This dispatch may
// not be immediate since other tasks might lie ahead in the saga task queue
// or still be in progress. |
// TLDR (put); Will call the reducer to update the latest value to the store/initial state.

// call (fn, ...args) Creates an Effect description that instructs the middleware to
// call the function fn with args as arguments.

// take(pattern) Creates an Effect description that instructs the middleware to wait
// for a specified action on the Store.

import { getUserFailure, getUserSuccess } from "./slices/userSlice";

function* getUsers() {
  try {
    const users = yield call(() =>
      fetch("https://jsonplaceholder.typicode.com/users")
    );
    const data = yield users.json(); //yield will wait for this call to finish before procedding to the next line.
    yield put(getUserSuccess(data));
  } catch (error) {
    yield put(getUserFailure(error));
  }
}

//Generator function

function* userSaga() {
  yield takeEvery("users/getUserFetch", getUsers);
}

export default userSaga;
