import { Dropdown } from 'components/ui'
import { FC } from 'react'
import { Language, Option } from 'types'

const typeOptions = [
  {
    label: 'All',
    value: 'all'
  },
  {
    label: 'Sources',
    value: 'sources'
  },
  {
    label: 'Forks',
    value: 'forks'
  },
  {
    label: 'Archived',
    value: 'archived'
  },
  {
    label: 'Mirrors',
    value: 'mirrors'
  }
]

const sortOptions = [
  {
    label: 'Last updated',
    value: 'updated'
  },
  {
    label: 'Name',
    value: 'name'
  },
  {
    label: 'Stars',
    value: 'stars'
  }
]
const languageOptions: Option[] = [
  { label: 'All', value: 'all' },
  ...Object.keys(Language).map((key) => ({
    label: key,
    value: key.toLowerCase()
  }))
]

type SetState<T> = React.Dispatch<React.SetStateAction<T>>

type Props = {
  type: string
  sort: string
  language: string
  setType: SetState<string>
  setSort: SetState<string>
  setLanguage: SetState<string>
  setRepoName: SetState<string>
}

const SearchRepo: FC<Props> = ({
  type = '',
  setType,
  sort = '',
  setSort,
  language = '',
  setLanguage,
  setRepoName
}) => {
  return (
    <div className="grid py-4 border-b md:flex border-accent-br">
      <input
        className="w-full mr-4 bg-transparent input"
        placeholder="Find a repository..."
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setRepoName(e.target.value)
        }
      />
      <div className="flex my-1">
        <Dropdown
          options={typeOptions}
          selected={type}
          className="mr-1"
          onClick={setType}
          title="Select type">
          Type
        </Dropdown>
        <Dropdown
          options={languageOptions}
          selected={language}
          className="mr-1"
          onClick={setLanguage}
          title="Select language">
          Language
        </Dropdown>
        <Dropdown
          options={sortOptions}
          selected={sort}
          className="mr-1"
          onClick={setSort}
          title="Select order">
          Sort
        </Dropdown>
      </div>
    </div>
  )
}

export default SearchRepo
