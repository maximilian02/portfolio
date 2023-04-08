import Link from "next/link"

async function fetchRepos() {
  const response = await fetch('https://api.github.com/users/maximilian02/repos')
  const repos = await response.json()
  return repos
}

export const metadata = {
  title: 'My code'
}

const ReposPage = async () => {
  const repos = await fetchRepos()
  console.log(repos)

  return (
    <>
      <h1 className="text-xl font-bold">Repositories</h1>
      {repos.reverse().map((repo: any) =>
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 my-3">
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-medium">
                {repo.description}
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">
                <Link href={repo.html_url} target="_blank">{repo.full_name}</Link>
              </div>
            </figcaption>
          </div>
        </figure>)
      }
    </>
  )
}

export default ReposPage
