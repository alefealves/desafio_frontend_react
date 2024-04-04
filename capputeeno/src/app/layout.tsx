import { Header } from '@/components/header'
import './globals.css'
import { Saira } from 'next/font/google'
import { DefaultProviders } from '@/components/default-providers'

const saira = Saira({ 
  weight: ['300', '400', '500', '600'],
  subsets: ['latin']
 })

export const metadata = {
  title: 'Capputeeno',
  description: 'Capputeeno',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <DefaultProviders>
          <Header/>
          {children}
        </DefaultProviders>
      </body>
    </html>
  )
}