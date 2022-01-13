import { render } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  it('should be match with snapshot', () => {
    const { asFragment } = render(<Footer />)
    expect(asFragment()).toMatchSnapshot()
  })
})
