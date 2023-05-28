import Header from '@/components/common/Header'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/common/Footer'
import SideNav from '@/components/common/SideNav'
import ReactQueryProvider from '@/reactQuery/Provider'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nation-A',
  description: '3D Meta Body 구현 기술',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={inter.className}>
      <body>
        <ReactQueryProvider>
          {/* <ReduxProviders> */}
          <div className="flex h-screen w-screen">
            <SideNav />
            <div className="w-full">
              <Header />
              <main className="h-[calc(100vh-104px)]">{children}</main>
              <Footer />
            </div>
          </div>
          <ReactQueryDevtools />
          {/* </ReduxProviders> */}
        </ReactQueryProvider>
      </body>
    </html>
  )
}
