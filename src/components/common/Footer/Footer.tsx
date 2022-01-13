import { MarkGithubIcon } from '@primer/octicons-react'

const GithubCopyright = () => (
  <span className="flex items-center justify-center w-full text-footer">
    <MarkGithubIcon size={24} className="mr-2 text-fg-subtle" />
    <span className="leading-[1.125rem] align-middle">© 2021 GitHub, Inc.</span>
  </span>
)

const Footer = () => (
  <footer className="flex flex-wrap items-center self-end justify-start px-4 py-10 mt-10 text-xs text-center border-t border-accent-br">
    <div className="hidden w-1/4 md:block">
      <GithubCopyright />
    </div>
    <ul className="flex flex-wrap justify-between w-full gap-x-4 md:w-2/3 text-accent-fg">
      <li>
        <a href="https://docs.github.com/en/github/site-policy/github-terms-of-service">
          Terms
        </a>
      </li>
      <li>
        <a href="https://docs.github.com/en/github/site-policy/github-privacy-statement">
          Privacy
        </a>
      </li>
      <li>
        <a href="https://github.com/security">Security</a>
      </li>
      <li>
        <a href="https://www.githubstatus.com/">Status</a>
      </li>
      <li>
        <a href="https://docs.github.com">Docs</a>
      </li>
      <li>
        <a href="https://support.github.com/?tags=dotcom-footer">
          Contact GitHub
        </a>
      </li>
      <li>
        <a href="https://github.com/pricing">Pricing</a>
      </li>
      <li>
        <a href="https://docs.github.com">API</a>
      </li>
      <li>
        <a href="https://services.github.com/">Training</a>
      </li>
      <li>
        <a href="https://github.blog/">Blog</a>
      </li>
      <li>
        <a href="https://github.com/about">About</a>
      </li>
    </ul>
    <div className="w-full mt-2 mb-10 md:hidden">
      <GithubCopyright />
    </div>
  </footer>
)

export default Footer
