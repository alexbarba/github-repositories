import { FC } from 'react'
import { IUser } from 'types'
import { Avatar } from 'components/ui'
import {
  LinkIcon,
  PeopleIcon,
  StarIcon,
  MailIcon,
  LocationIcon,
  OrganizationIcon
} from '@primer/octicons-react'

type Props = {
  user: IUser
}

const UserCard: FC<Props> = ({ user }) => {
  const Social: FC<{ className?: string }> = ({ className }) => (
    <div className={className}>
      <a href={`${user.html_url}?tab=followers`}>
        <PeopleIcon size={16} className="mr-2" />
        <span className="font-bold text-primary">{user.followers}</span>{' '}
        followers
      </a>{' '}
      ·{' '}
      <a href={`${user.html_url}?tab=following`}>
        <span className="font-bold text-primary">{user.following}</span>{' '}
        following{' '}
      </a>
      ·{' '}
      <a href={`${user.html_url}?tab=stars`}>
        <StarIcon size={16} />{' '}
        <span className="font-bold text-primary">38</span>
      </a>
    </div>
  )

  return (
    <div className="w-full text-sm text-primary">
      <div className="flex items-center md:block">
        <Avatar
          src={user.avatar_url}
          className="relative inline-block items-center h-auto w-2/12 md:w-full py-4 mr-3 md:mx-0 md:py-0 min-w-[3rem] min-h-[3rem]"
        />
        <div className="inline-block w-10/12 py-4 md:w-full">
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <h3 className="text-lg text-secondary">{user.login}</h3>
        </div>
      </div>
      <button className="hidden btn md:block">Follow</button>
      <p className="my-4 text-base">{user.bio}</p>
      <div>
        <Social className="hidden mb-3 text-secondary md:block" />

        {user.company ? (
          <p className="hidden md:block pt-[5px]">
            <OrganizationIcon
              size={16}
              className="hidden mr-2 text-secondary"
            />
            {user.company}
          </p>
        ) : null}
        {user.location ? (
          <p className="hidden md:block">
            <LocationIcon size={16} className="mr-2 text-secondary" />
            {user.location}
          </p>
        ) : null}
        <p className="pt-[5px]">
          <MailIcon size={16} className="mr-2 text-secondary" />
          {user.email || 'mail@example.com'}
        </p>
        {user.blog ? (
          <p className="pt-[5px]">
            <LinkIcon size={16} className="mr-2 text-secondary" />
            {user.blog}
          </p>
        ) : null}
      </div>
      <Social className="block mt-2 mb-4 md:my-4 text-secondary md:hidden" />
      <button className="btn md:hidden">Follow</button>
    </div>
  )
}

export default UserCard
