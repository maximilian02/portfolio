import { Play } from 'next/font/google'
import Header from './components/Header'
import './globals.css'

const play = Play({
  weight: ['400', '700'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Max Zelarayán',
  description: 'Software engineer with more than a decade of experience',
  keywords: 'software engineer, web development, javascript, typescript, react, node, angular, html, css, npm, yarn, git, github, code, programming'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={play.className}>
        <Header />
        <main className='container'>
          {children}
        </main>
      </body>
    </html>
  )
}
