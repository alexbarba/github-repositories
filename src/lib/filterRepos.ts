import { IRepository } from 'types'

type Props = {
  repos: IRepository[]
  name: string
  language: string
}

const filterRepos = ({ repos, name, language }: Props) =>
  repos.filter(
    (repo) =>
      repo.name.toLowerCase().includes(name.toLowerCase()) &&
      (language === 'all' ||
        repo.language?.toLowerCase().includes(language.toLowerCase()))
  )

export default filterRepos
