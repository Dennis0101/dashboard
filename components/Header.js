import { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'

export default function Header() {
  const { dark, toggleTheme } = useContext(ThemeContext)

  return (
    <header className="w-full bg-white dark:bg-zinc-800 px-6 py-4 flex items-center justify-between border-b dark:border-zinc-700">
      <h1 className="text-xl font-semibold">관리자 대시보드</h1>
      <button
        onClick={toggleTheme}
        className="bg-zinc-200 dark:bg-zinc-700 text-sm px-4 py-2 rounded"
      >
        {dark ? '☀️ 라이트' : '🌙 다크'}
      </button>
    </header>
  )
}
