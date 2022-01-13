import { FC } from 'react'

type Props = {
  className?: string
}

const Tag: FC<Props> = ({ children, className = '' }) => (
  <div
    className={`border border-accent-br rounded-xl w-auto px-2 inline-block text-xs ${className}`}>
    {children}
  </div>
)

export default Tag
