import { render } from '@testing-library/react'
import RepoList from './RepoList'
import repoFake from './repoFake'

const dataFake = [repoFake]

describe('RepoList', () => {
  it('should be match with snapshot', () => {
    const { asFragment } = render(<RepoList repos={dataFake} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
