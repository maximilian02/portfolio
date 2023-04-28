import HighlightText from "../components/HighlightText"
import Experiences from "./experiencies.json"

interface Experience {
  company: string
  role: string
  description: string
  image: string
  dateRange: string
  links: string[]
}
export const metadata = {
  title: "My experience",
}

const ExperiencePage = () => {
  const exps = Experiences.exp
  return (
    <>
      <h1 className="text-xl font-bold mb-2 pl-4 mt-8">
        <HighlightText>Experience</HighlightText>
      </h1>
      <h2 className="text-md mb-2 pl-4 mt-4">
        Throughout my career, I have been involved in over 15 projects, both as
        a contractor and as a direct employee. Some of the notable companies
        that I have had the opportunity to collaborate with include:
      </h2>
      <div className="flex flex-row flex-wrap p-4 pl-4 justify-around gap-1">
        {exps.map((exp: Experience) => (
          <figure className="mb-4 max-w-xs">
            <span className="h-56 bg-white">
              <img
                src={exp.image}
                className="mb-4 max-w-xs rounded-lg leading-none shadow-lg"
                alt="Taking up Water with a Spoon"
              />
            </span>
            <h3 className="text-md font-bold text-neutral-100 mt-4">
              {exp.role} @ {exp.company} - {exp.dateRange}
            </h3>
            <figcaption className="text-sm text-neutral-500 mb-1">
              <p dangerouslySetInnerHTML={{ __html: exp.description }}></p>
            </figcaption>
            <span className="max-w-xs">
              {exp.links.map((link: string) => (
                <>
                  <br />
                  <a
                    href={link}
                    target="_blank"
                    className="cursor-pointer ml-4 bg-gray-600 font-bold bg-opacity-75 hover:bg-opacity-100"
                  >
                    {link}
                  </a>
                </>
              ))}
            </span>
          </figure>
        ))}
      </div>
    </>
  )
}

export default ExperiencePage
