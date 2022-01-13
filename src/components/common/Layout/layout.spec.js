import { render } from '@testing-library/react'
import Layout from './Layout'

describe('Layout', () => {
  it('should be match with snapshot', () => {
    const { asFragment } = render(<Layout />)
    expect(asFragment()).toMatchSnapshot()
  })
})
