import axios from 'axios';

export const SET_NOTIFICATIONS_PREF = 'SET_NOTIFICATIONS_PREF';
export function setNotificationsPref(pref) {
  return { type: SET_NOTIFICATIONS_PREF, pref };
}

export function updateNotifcationPref(pref) {
  return (dispatch) => {
    return axios({
      method: 'update',
      url: '/api/notifications/'
    })
  }
}