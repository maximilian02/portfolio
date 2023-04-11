import Link from "next/link"
import HighlightText from "../components/HighlightText"

export const metadata = {
  title: 'Lets chat'
}

const ContactPage = () => {
  return (
    <>
      <h1 className="text-xl font-bold mb-2 pl-4 mt-8"><HighlightText>Sure, let's talk! Contact information</HighlightText></h1>
      <div className="pl-4">
        <p>Email: <Link target="_blank" href="mailto:maxzelarayan@yahoo.com">maxzelarayan@yahoo.com</Link></p>
        <p>LinkedIn: <Link target="_blank" href="https://www.linkedin.com/in/maxzelarayan">in/maxzelarayan</Link></p>
        <p>Github: <Link target="_blank" href="https://github.com/maximilian02">@maximilian02</Link></p>
      </div>
    </>
  )
}

export default ContactPage
