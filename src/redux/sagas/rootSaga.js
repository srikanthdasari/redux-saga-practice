import { takeLatest } from "redux-saga";
import { handleGetUser } from "./handlers/user";
import { GET_USER } from "./../features/user";

export function* watcherSaga() {
  yield takeLatest(GET_USER, handleGetUser);
}
