import { FC } from 'react'

type Props = {
  src: string
  className?: string
}

const Avatar: FC<Props> = ({ src, className = '' }) => {
  return (
    <figure className={className}>
      <a href={src}>
        <img
          src={src}
          className="w-full h-auto rounded-full"
          alt="avatar"
          width="296"
          height="296"
        />
      </a>
    </figure>
  )
}

export default Avatar
