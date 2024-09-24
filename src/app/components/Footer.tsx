import HighlightText from "./HighlightText"

const Footer = () => {
  return (
    <footer className="px-4 sm:px-2 py-2 mb-20 mt-4 min-h-full">
      <div className="text-center text-sm text-gray-500">
        <span className="dark:text-gray-100 text-gray-900 font-bold text-lg mr-2">
          <HighlightText>Max Zelarayán</HighlightText>
        </span>{" "}
        &copy; {new Date().getFullYear()} All Rights Reserved
      </div>
    </footer>
  )
}

export default Footer
