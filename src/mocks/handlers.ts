import { rest } from 'msw'
import users from './users.json'
import loginInfo from './loginInfo.json'

export const handlers = [
  // 회원가입
  rest.post('/signup', async (req, res, ctx) => {
    console.log(req)
    const newUser = await req.json()
    users.push(newUser)

    return res(ctx.status(200), ctx.json([...users, newUser]))
  }),

  // 로그인
  rest.post('/login', async (req, res, ctx) => {
    const { email, password } = await req.json()
    const userEmail = loginInfo.find((user) => user.email === email)
    const userPw = loginInfo.find((user) => user.password === password)

    if (!userEmail) {
      return res(ctx.status(400), ctx.json({ message: '가입되지 않은 회원입니다.' }))
    }
    if (!userPw) {
      return res(ctx.status(400), ctx.json({ message: '비밀번호가 일치하지 않습니다.' }))
    }

    const user = users.find((user) => user.email === email)
    return res(ctx.status(200), ctx.json(user))
  }),

  // 로그아웃 우선 형식상 넣음
  rest.post('/logout', async (req, res, ctx) => {
    const { refreshToken } = await req.json()
    if (!refreshToken) {
      return res(ctx.status(400), ctx.json({ message: '로그인이 되어있지 않습니다.' }))
    }
    return res(ctx.status(200), ctx.json({ message: '로그아웃 되었습니다.' }))
  }),

  // 이메일 중복 확인
  rest.post('/signup/duplicate', async (req, res, ctx) => {
    const { email } = await req.json()
    const user = users.find((user) => user.email === email)
    if (!user) {
      return res(ctx.status(400), ctx.json({ message: '중복된 이메일입니다.' }))
    }
    return res(ctx.status(200), ctx.json({ message: '사용 가능한 이메일입니다.' }))
  }),

  // // 유저 정보 조회
  // rest.get('/users', async (req, res, ctx) => {
  //   return res(ctx.status(200), ctx.json(users))
  // }),

  // // 유저 정보 수정
  // rest.post('/users', async (req, res, ctx) => {
  //   const { email, name, phoneNumber, startWork, profileImage } = await req.json()

  //   const user = users.find((user) => user.email === email)
  //   if (!user) {
  //     return res(ctx.status(400), ctx.json({ message: '가입되지 않은 회원입니다.' }))
  //   }

  //   user.name = name
  //   user.phoneNumber = phoneNumber

  //   return res(ctx.status(200), ctx.json(user))
  // }),

  // // 유저 정보 삭제 우선 형식상 넣음
  // rest.post('/auth/user/id/delete', async (req, res, ctx) => {
  //   const { email } = await req.json()

  //   const user = users.find((user) => user.email === email)
  //   if (!user) {
  //     return res(ctx.status(400), ctx.json({ message: '가입되지 않은 회원입니다.' }))
  //   }

  //   const index = users.indexOf(user)
  //   users.splice(index, 1)

  //   return res(ctx.status(200), ctx.json(users))
  // }),
]
