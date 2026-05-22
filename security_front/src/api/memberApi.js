import { axiosInstance } from "./axiosInstance";

export const goLogin = async (loginData) => {
  const response = await axiosInstance.post('/member/login', loginData)
  return response
}