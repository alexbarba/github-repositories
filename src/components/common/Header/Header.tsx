import {
  ThreeBarsIcon,
  MarkGithubIcon,
  BellIcon,
  PlusIcon,
  TriangleDownIcon,
  PersonIcon
} from '@primer/octicons-react'
import { useHistory } from 'react-router-dom'
import { useRef } from 'react'
import classNames from 'lib/classNames'

const Header = () => {
  const history = useHistory()
  const searchRef = useRef<HTMLInputElement>(null)

  return (
    <header className="h-16 md:h-[60px] p-4 lg:px-8 md:px-6 bg-header text-sm text-header">
      <div className="flex items-center justify-between md:hidden">
        <ThreeBarsIcon size={24} />
        <a href="https://github.com">
          <MarkGithubIcon size={32} />
        </a>
        <a href="https://github.com/notifications">
          <BellIcon size={16} />
        </a>
      </div>
      <div className="items-center justify-between hidden md:flex">
        <div className="flex items-center w-full gap-4">
          <MarkGithubIcon size={32} />
          <label className="flex border border-white rounded-md border-opacity-30 h-7 min-w-[15.5rem] max-w-[17rem] px-2">
            <input
              className="box-border w-full h-full py-0 border-none bg-header focus-visible:outline-none"
              placeholder="Search or jump to..."
              ref={searchRef}
            />
            <button
              className={classNames(
                'btn',
                'w-auto h-auto px-2 py-0 border-white border-opacity-30 bg-header rounded-[4px] my-[3px] text-sm'
              )}
              onClick={() => history.push(searchRef?.current?.value || '/')}>
              /{' '}
            </button>
          </label>
          <ul className="flex gap-4 font-bold break-words">
            <li>
              <a href="https://github.com/pulls">Pull Requests</a>
            </li>
            <li>
              <a href="https://github.com/issues">Issues</a>
            </li>
            <li>
              <a href="https://github.com/marketplace">Marketplace</a>
            </li>
            <li>
              <a href="https://github.com/explore">Explore</a>
            </li>
          </ul>
        </div>
        <div className="flex gap-4">
          <a href="https://github.com/notifications">
            <BellIcon size={16} />
          </a>
          <div className="flex items-center">
            <PlusIcon size={16} />
            <TriangleDownIcon size={16} />
          </div>
          <div className="flex items-center">
            <PersonIcon size={20} className="border rounded-full" />
            <TriangleDownIcon size={16} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
