import { getCookie, setCookie } from 'cookies-next'

export const getToken = () => {
  return getCookie('accessToken')
}

export const setToken = (token: string) => {
  return setCookie('accessToken', token.split(' ')[1])
}


