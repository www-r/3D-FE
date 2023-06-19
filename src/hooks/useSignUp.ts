import { EmailCheckResponseData, RegisterEnroll } from '@/api/interface/auth'
import { emailCheck, join } from '@/api/service/auth'
import { useMutation } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'

// 회원가입 hook
export const useSignUp = () => {
  const router = useRouter()

  const { mutate: joinMutation } = useMutation(join, {
    onSuccess: (data) => {
      Swal.fire({
        title: '회원가입이 완료되었습니다.',
        text: '로그인을 진행해주세요.',
        icon: 'success',
        color: '#C7D1DB',
        background: '#171A1D',
        confirmButtonColor: '#3399FF ',
        confirmButtonText: '확인',
      })
      router.push('/login')
    },
    onError: (error) => {
      Swal.fire({
        title: '회원가입에 실패하였습니다.',
        text: '다시 시도해주세요.',
        icon: 'error',
        color: '#C7D1DB',
        background: '#171A1D',
        cancelButtonColor: '#737C85',
        cancelButtonText: '확인',
      })
    },
  })

  // email 유효성체크
  const { mutate: emailCheckMutation } = useMutation<
    AxiosResponse<EmailCheckResponseData> | undefined,
    AxiosError,
    string
  >(emailCheck, {
    onSuccess: (data) => {
      if (!data?.data.data) {
        Swal.fire({
          title: '사용가능한 이메일입니다.',
          text: '회원가입을 진행해주세요.',
          icon: 'success',
          color: '#C7D1DB',
          background: '#171A1D',
          confirmButtonColor: '#3399FF ',
          confirmButtonText: '확인',
        })
      } else {
        Swal.fire({
          title: '사용불가능한 이메일입니다.',
          text: '다른 이메일을 입력해주세요.',
          icon: 'error',
          color: '#C7D1DB',
          background: '#171A1D',
          cancelButtonColor: '#737C85',
          cancelButtonText: '확인',
        })
      }
    },
  })
  return { joinMutation, emailCheckMutation }
}
