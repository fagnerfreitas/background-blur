import './globals.scss'
import styles from './styles.module.scss'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className={styles.header}>
          <strong>Simples background Blur - By Legião Digital</strong>
        </div>
        <div className={styles.circle}></div>
        <div className={styles.circle2}></div>
        {children}
      </body>
    </html>
  )
}
