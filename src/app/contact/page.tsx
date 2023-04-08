import Link from "next/link"

export const metadata = {
  title: 'Lets chat'
}

const ContactPage = () => {
  return (
    <>
      <h1 className="text-xl font-bold">Sure, let's talk! Contact information</h1>
      <p>Email: <Link target="_blank" href="mailto:maxzelarayan@yahoo.com">maxzelarayan@yahoo.com</Link></p>
      <p>LinkedIn: <Link target="_blank" href="https://www.linkedin.com/in/maxzelarayan/">in/maxzelarayan</Link></p>
    </>
  )
}

export default ContactPage
