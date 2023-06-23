import { LoginRequest } from '@/api/interface/auth'
import { login } from '@/api/service/auth'
import { setToken } from '@/utils/token'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useLogin = () => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation((account: LoginRequest) => login(account), {
    onSuccess: (data) => {
      // queryClient.setQueryData(['user', 'id'], data.data.data)
      // setQueryData inactive 되어 다른페이지에서 getQueryData 할 수 없음
      // redux 사용해서 userId 전역관리?
    },
    onError: (err: AxiosError) => {
      console.log(err)
    },
  })
  return { mutate }
}
