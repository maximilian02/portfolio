import Link from "next/link"

const Header = () => {


  return (
    <header className="header mb-2 dark:border-gray-700">
      <div className="container dark:text-gray-100 text-gray-900">
        <div className="logo">
          <Link href="/">Max Zelarayán</Link>
          <h3 className="text-sm">&#126; Software engineer &#126;</h3>
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
