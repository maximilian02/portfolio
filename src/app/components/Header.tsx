'use client'
import React, { useState } from 'react'
import { useTheme } from 'next-themes'
import Link from "next/link"

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()

  const darkModeToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const darkMode = e?.target.checked
    console.log(darkMode ? 'dark' : 'light')

    setIsDarkMode(darkMode)
    setTheme(darkMode ? 'dark' : 'light')
    // setTheme()
  }

  return (
    <header className="header mb-2 dark:border-gray-700">
      <div className="container dark:text-gray-100 text-gray-900">
        <div className="logo">
          <Link href="/">Max Zelarayán</Link>
        </div>
        <div className="links flex justify-center">
          <Link href="/">Home</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/contact">Contact</Link>
        </div>
        {/* <input type="checkbox" checked={isDarkMode} onChange={darkModeToggle} />
        Dark mode */}
      </div>
    </header>
  )
}

export default Header
