import { axiosInstance } from '../axios'

export const cartCount = async (user: number) => {
  try {
    const res = await axiosInstance.get(`/s/user/${user}/cartCount`)
    if (res && res.data) {
      return res.data.data.cartCount
    }
    return 0
  } catch (error) {
    console.log(error)
    return 0
  }
}

export const cartList = async (user: number) => {
  const res = await axiosInstance.get(`/s/user/${user}/cart`)
  return res.data
}
