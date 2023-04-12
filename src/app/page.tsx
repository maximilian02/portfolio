import HighlightText from "./components/HighlightText"

const HomePage = () => {
  return (
    <>
      <h1 className="text-xl font-bold mb-2 pl-4 mt-8"><HighlightText>Hey there! I'm Maximiliano Zelarayán, but now that you're here you can call me Max <span className="text-6xl">&#128104;&#127995;&#128077;&#127996;</span></HighlightText></h1>
      <div className="cursor-text pl-4">
        <p>As an active software engineer with over a decade of experience, I have a proven track record of designing, developing, and delivering high-quality software solutions for complex business problems. With expertise in multiple programming languages and technologies, I have successfully led cross-functional teams and collaborated with stakeholders to deliver innovative solutions that meet business needs.</p>
        <br />
        <p>Throughout my career, I have worked on a wide range of projects, from developing mobile applications to designing and implementing scalable cloud-based solutions. I am passionate about staying up-to-date with the latest technologies and approaches and enjoy sharing my knowledge with others.</p>
        <br />
        <p>In addition to my technical skills, I am also an effective communicator and a skilled problem solver. I thrive in fast-paced, dynamic environments and enjoy working with teams to achieve shared goals. If you're looking for a seasoned software engineer who can add value to your organization, solve complex problems and deliver innovative solutions, I'd love to hear from you.</p>
      </div>
    </>
  )
}

export default HomePage
