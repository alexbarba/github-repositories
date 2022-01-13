import { Fragment, FC } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { TriangleDownIcon, CheckIcon } from '@primer/octicons-react'
import { Option } from 'types'
import classNames from 'lib/classNames'

type Props = {
  title: string
  options: Option[]
  selected: string
  className: string
  onClick: React.Dispatch<React.SetStateAction<string>>
}

const Dropdown: FC<Props> = ({
  children,
  title,
  options,
  selected,
  className = '',
  onClick
}) => (
  <Menu
    as="div"
    className={classNames(className, 'relative inline-block text-left z-[5]')}>
    <Menu.Button className="inline-flex w-auto btn">
      {children} <TriangleDownIcon size={16} className="inline-block" />
    </Menu.Button>
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95">
      <Menu.Items className="absolute grid md:right-0 left-0 w-56 mt-2  origin-top-right rounded-md shadow-lg bg-secondary ring-1 ring-black ring-opacity-5 focus:outline-none text-primary text-xs overflow-y-auto max-h-[500px]">
        <Menu.Item>
          <span className="block px-4 py-2 text-sm font-bold">{title}</span>
        </Menu.Item>

        {options.map(({ value, label }) => (
          <Menu.Item
            as="label"
            key={value}
            onClick={() => onClick(value)}
            className={classNames(
              value === selected ? 'bg-neutral-subtle' : '',
              'px-4 py-2 text-sm hover:bg-neutral-subtle'
            )}>
            <CheckIcon className={value === selected ? '' : 'invisible'} />{' '}
            <span>{label}</span>
          </Menu.Item>
        ))}
      </Menu.Items>
    </Transition>
  </Menu>
)

export default Dropdown
