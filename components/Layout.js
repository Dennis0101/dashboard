import Sidebar from './Sidebar'
import Header from './Header'

export default function Layout({ children }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-6 overflow-y-auto flex-1 bg-gray-50 dark:bg-zinc-900">
          {children}
        </main>
      </div>
    </div>
  )
}
