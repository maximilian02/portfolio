import Link from "next/link"
import Image from "next/image"

const HEADING_TITLE = `Ingeniero informático / IT Engineer`

const Header = () => {
  return (
    <header className="header mb-2 dark:border-gray-700 flex-col">
      <img
        src="/hero.jpeg"
        className="w-full h-auto scale-95 lg:w-fit border border-black rounded-3xl mb-8"
        alt="Max Zelarayán website"
      />
      <div className="container dark:text-gray-100 text-gray-900">
        <div className="logo">
          <Link href="/">Max Zelarayán</Link>
          <h3 className="text-md">&#126; {HEADING_TITLE} &#126;</h3>
        </div>
        <div className="links flex justify-center">
          <Link href="/">Home</Link>
          <Link href="/experience">Experiencia</Link>
          <Link href="/contact">Contacto</Link>
        </div>
        {/* <input type="checkbox" checked={isDarkMode} onChange={darkModeToggle} />
      Dark mode */}
      </div>
    </header>
  )
}

export default Header
