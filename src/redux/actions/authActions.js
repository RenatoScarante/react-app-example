import * as types from "../constants";

export const login = ({ user, token } = {}) => ({
  type: types.LOGIN,
  payload: { user, token }
});

export const logout = () => ({
  type: types.LOGOUT
});
