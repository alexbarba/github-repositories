import { render } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('should be match with snapshot', () => {
    const { asFragment } = render(<Header />)
    expect(asFragment()).toMatchSnapshot()
  })
})
