import { render } from '@testing-library/react'
import UnderlineNav from './UnderlineNav'

describe('UnderlineNav', () => {
  it('should be match with snapshot', () => {
    const { asFragment } = render(<UnderlineNav />)
    expect(asFragment()).toMatchSnapshot()
  })
})
