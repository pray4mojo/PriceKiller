import { SET_USER_STATE, USER_LOGOUT } from '../actions/main_a.jsx';
import { SET_NOTIFICATIONS_PREF } from '../actions/notifications_a.jsx';

const defaultState = {
  username: '',
  email: '',
  picture: '',
  notifications: [],
  subscription: true
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
    case SET_NOTIFICATIONS_PREF:
      return Object.assign({}, state, { subscription: action.preference })
    default:
      return state;
  }
}

export default userState;