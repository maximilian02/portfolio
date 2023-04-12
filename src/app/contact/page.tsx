import HighlightText from "../components/HighlightText"
import Tile from "../components/Tile"

export const metadata = {
  title: 'Lets chat'
}

const ContactPage = () => {
  return (
    <>
      <h1 className="text-xl font-bold mb-2 pl-4 mt-8"><HighlightText>Sure, let's talk!</HighlightText></h1>
      <h2 className="text-md mb-2 pl-4 mt-4">Here you have my links. I look forward to chat with you! <span className="text-2xl">&#128516;</span></h2>
      <div className="sm:container flex flex-col items-center justify-center">
        <Tile type="email" label="maxzelarayan@yahoo.com" link="mailto:maxzelarayan@yahoo.com" />
        <Tile type="linkedin" label="in/maxzelarayan" link="https://www.linkedin.com/in/maxzelarayan" />
        <Tile type="github" label="@maximilian02" link="https://github.com/maximilian02/" />
      </div>
    </>
  )
}

export default ContactPage
