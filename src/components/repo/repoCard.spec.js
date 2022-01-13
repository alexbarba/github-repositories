import { render } from '@testing-library/react'
import RepoCard from './RepoCard'
import repoFake from './repoFake'

describe('RepoCard', () => {
  it('should be match with snapshot', () => {
    const { asFragment } = render(<RepoCard repo={repoFake} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
