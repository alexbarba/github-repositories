import { render } from '@testing-library/react'
import UserCard from './UserCard'
import userFake from './userFake'

describe('UserCard', () => {
  it('should be match with snapshot', () => {
    const { asFragment } = render(<UserCard user={userFake} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
