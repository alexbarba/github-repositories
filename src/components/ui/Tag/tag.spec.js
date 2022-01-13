import { render } from '@testing-library/react'
import Tag from './Tag'

describe('Tag', () => {
  it('should be match with snapshot', () => {
    const { asFragment } = render(<Tag>Javascript</Tag>)
    expect(asFragment()).toMatchSnapshot()
  })
})
