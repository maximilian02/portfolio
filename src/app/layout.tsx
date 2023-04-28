import { Play } from "next/font/google"
import Footer from "./components/Footer"
import Header from "./components/Header"
import "./globals.css"

const play = Play({
  weight: ["400", "700"],
  subsets: ["latin"],
})

export const metadata = {
  title: "Hey I'm Max",
  description: "Software engineer with more than a decade of experience",
  keywords:
    "software engineer, web development, javascript, typescript, react, node, angular, html, css, npm, yarn, git, github, code, programming",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${play.className} light:bg-white light:bg-gray-700 dark:bg-gray-900  dark:text-gray-100`}
      >
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
