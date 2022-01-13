import { FC, useState } from 'react'
import { Header, Footer } from 'components/common'
import { SunIcon, MoonIcon } from '@primer/octicons-react'

const ThemeSwitch = ({ isDark = true, setIsDark = (val: boolean) => {} }) => (
  <button
    className="fixed z-10 flex items-center justify-center text-white border rounded-full bg-secondary dark:bg-white h-9 w-9 bottom-6 left-6 border-accent-br dark:text-secondary"
    onClick={() => setIsDark(!isDark)}>
    {isDark ? <SunIcon /> : <MoonIcon />}
  </button>
)

const Layout: FC = ({ children }) => {
  const [isDark, setIsDark] = useState(true)

  return (
    <div className={isDark ? 'dark ' : 'light'}>
      <div className="w-screen min-h-screen max-w-[100%] text-primary dark:bg-secondary md:dark:bg-primary ">
        <Header />
        <main
          className="max-w-screen-xl min-h-full px-4 mx-auto md:px-9"
          style={{ scrollbarColor: 'transparent' }}>
          {children}
        </main>
        <Footer />
      </div>
      <ThemeSwitch isDark={isDark} setIsDark={setIsDark} />
    </div>
  )
}

export default Layout
