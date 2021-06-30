import { all, call, put, takeEvery } from "redux-saga/effects";
import { actions, Types } from "./index";
import { callApi } from "../../common/util/api";
import { makeFetchSaga } from "../../common/util/fetch";

function* fetchAutoComplete({ keyword }) {
  const { isSuccess, data } = yield call(callApi, {
    url: "/user/search",
    params: { keyword },
  });

  console.log("data", isSuccess, data);
  if (isSuccess && data) {
    yield put(actions.setValue("autoCompletes", data));
  }
}

export default function* () {
  yield all([
    // takeEvery(Types.FetchAutoComplete, fetchAutoComplete)
    takeEvery(
      Types.FetchAutoComplete,
      makeFetchSaga({ fetchSaga: fetchAutoComplete, canCache: true })
    ),
  ]);
}