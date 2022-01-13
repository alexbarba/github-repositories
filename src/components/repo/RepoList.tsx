import { FC } from 'react'
import { IRepository } from 'types'
import RepoCard from './RepoCard'

type RepoCardProps = {
  repos: IRepository[]
}

const RepoList: FC<RepoCardProps> = ({ repos }) => {
  return (
    <div className="text-sm">
      <ul className="divide-y divide-accent-br">
        {repos.map((repo) => (
          <li key={repo.id}>
            <RepoCard repo={repo} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RepoList
