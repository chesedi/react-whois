import {
  createReducer,
  createSetValueAction,
  FETCH_KEY,
  setValueReducer,
} from "../../common/redux-helper";

export const Types = {
  SetValue: "search/SetValue",
  FetchUser: "search/FetchUser",
  FetchUpdateUser: "search/FetchUpdateUser",
};

export const actions = {
  setValue: createSetValueAction(Types.SetValue),
  fetchUser: (name) => ({ type: Types.FetchUser, name }),
  fetchUpdateUser: ({ user, key, value, fetchKey }) => ({
    type: Types.FetchUpdateUser,
    user,
    key,
    value,
    [FETCH_KEY]: fetchKey,
  }),
};

const INITIAL_STATE = {
  user: undefined,
};
const reducer = createReducer(INITIAL_STATE, {
  [Types.SetValue]: setValueReducer,
});
export default reducer;