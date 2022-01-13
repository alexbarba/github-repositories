import { render } from '@testing-library/react'
import Avatar from './Avatar'

describe('Avatar', () => {
  it('should be match with snapshot', () => {
    const { asFragment } = render(<Avatar />)
    expect(asFragment()).toMatchSnapshot()
  })
})
