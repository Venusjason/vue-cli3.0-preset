import Http from './http'

export const getUserInfo = userId => Http({
  method: 'GET',
  url: `/api/user/${userId}`,
})

export const updateUserInfo = (userId, data) => Http({
  method: 'PUT',
  url: `/api/user/${userId}`,
  data,
})

export const testApi = () => Http({
  method: 'GET',
  url: '/api/startTimeConfigure/startTimes',
})
