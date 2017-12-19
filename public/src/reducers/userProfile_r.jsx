import { SET_USER_STATE, USER_LOGOUT } from '../actions/main_a.jsx';

const defaultState = {
  username: '',
  email: '',
  picture: '',
  notifications: []
};

const userState = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USER_STATE:
      return Object.assign({}, state, {
        username: action.user.username,
        email: action.user.email,
        picture: action.user.picture,
        subscription: action.user.subscription,
        notifications: action.user.notifications
      });
    case USER_LOGOUT:
      return state;
    default:
      return state;
  }
}

export default userState;