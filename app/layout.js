'use client'

import '../styles/app.scss'
import { Inter } from 'next/font/google'
import Header from './Header'
import { ContextProvider } from '@/components/Clients'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ContextProvider>
        <>
        <Header />
          {children}
        </>
      </ContextProvider>
    </body>
    </html>
  );
}
