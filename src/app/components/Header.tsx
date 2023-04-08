import Link from "next/link"

const Header = () => {
  return (
    <header className="header mb-2">
      <div className="container">
        <div className="logo">
          <Link href="/">Max Zelarayán</Link>
        </div>
        <div className="links flex justify-center">
          <Link className="self-center" href="/experience">Experience</Link>
          <Link className="self-center" href="/contact">Contact</Link>
          <Link className="self-center" href="/code/repos">Code</Link>
        </div>
      </div>
    </header>
  )
}

export default Header
