import { render } from '@testing-library/react'
import Spinner from './Spinner'

describe('Spinner', () => {
  it('should be match with snapshot', () => {
    const { asFragment } = render(<Spinner />)
    expect(asFragment()).toMatchSnapshot()
  })
})
