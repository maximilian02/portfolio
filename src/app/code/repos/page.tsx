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

  return (
    <>
      <h1 className="text-xl font-bold">Repositories</h1>
      {repos.reverse().map((repo: any) =>
        <Link href={repo.html_url} target="_blank">
          <figure className="bg-slate-100 rounded-xl p-4 dark:bg-slate-800 my-3">
            <div className="pt-6 md:p-4 text-center md:text-left space-y-4">
              <blockquote>
                <p className="text-lg font-medium text-white">
                  {repo.description}
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <div className="text-sky-500 dark:text-sky-400">
                  {repo.full_name}
                </div>
              </figcaption>
            </div>
          </figure>
        </Link>)
      }
    </>
  )
}

export default ReposPage
