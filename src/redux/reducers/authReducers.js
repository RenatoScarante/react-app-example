import * as types from "../constants";

const USER = process.env.REACT_APP_STORAGE_USER;
const TOKEN = process.env.REACT_APP_STORAGE_TOKEN;

const initialState = {
  user: {},
  token: "",
  isAuthenticated: false
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN:
      const serializedUser = JSON.stringify(action.payload.user);
      localStorage.setItem(USER, serializedUser);
      localStorage.setItem(TOKEN, action.payload.token);

      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true
      };

    case types.LOGOUT:
      localStorage.removeItem(USER);
      localStorage.removeItem(TOKEN);

      return initialState;

    default:
      return state;
  }
}

export default authReducer;
