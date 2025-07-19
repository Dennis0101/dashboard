import Header from './Header'

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
      <Header />
      <main className="p-6">{children}</main>
    </div>
  )
}
