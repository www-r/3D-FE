import { LoginRequest } from '@/api/interface/auth'
import { login } from '@/api/service/auth'
import { setToken } from '@/utils/token'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useLogin = () => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation((account: LoginRequest) => login(account), {
    onSuccess: (data) => {
      queryClient.setQueryData(['user'], data.data.data)
      setToken(data.headers.authorization)
    },
    onError: (err: AxiosError) => {
      console.log(err)
    },
  })
  return { mutate }
}
