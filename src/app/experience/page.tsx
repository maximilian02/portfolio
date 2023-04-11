import Experiences from './experiencies.json'

interface Experience {
  company: string;
  role: string;
  description: string;
  image: string;
  dateRange: string;
}
export const metadata = {
  title: 'My experience'
}

const ExperiencePage = () => {
  const exps = Experiences.exp;
  return (
    <>
      <h1 className="text-xl font-bold mb-2">Experience</h1>
      <div className="flex justify-center content-center items-center">
        {exps.map((exp: Experience) =>
          <figure className="mb-4 inline-block max-w-sm ml-4">
            <span className="min-h-32 w-96 h-56 min-w-96 block bg-white">
              <img
                src={exp.image}
                className="mb-4 rounded-lg align-middle leading-none shadow-lg"
                alt="Taking up Water with a Spoon" />
            </span>
            <h3 className="text-md font-bold text-neutral-600 dark:text-neutral-400">
              {exp.role} @ {exp.company} - {exp.dateRange}
            </h3>
            <figcaption className="text-sm text-neutral-600 dark:text-neutral-400">
              {exp.description}
            </figcaption>
          </figure>)}
      </div>
    </>
  )
}

export default ExperiencePage
