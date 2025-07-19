import Link from 'next/link'
import { useRouter } from 'next/router'

const menuItems = [
  { name: 'Dashboard', path: '/admin/dashboard' },
  { name: 'Users', path: '/admin/users' },
  { name: 'Products', path: '/admin/products' },
  { name: 'Settings', path: '/admin/settings' },
]

export default function Sidebar() {
  const router = useRouter()

  return (
    <aside className="w-64 bg-white dark:bg-zinc-800 shadow-md h-full">
      <div className="p-6 font-bold text-lg border-b dark:border-zinc-700">
        Admin Panel
      </div>
      <nav className="p-4 space-y-2">
        {menuItems.map(({ name, path }) => (
          <Link key={name} href={path}>
            <a
              className={`block px-4 py-2 rounded ${
                router.pathname === path
                  ? 'bg-blue-500 text-white'
                  : 'hover:bg-zinc-200 dark:hover:bg-zinc-700'
              }`}
            >
              {name}
            </a>
          </Link>
        ))}
      </nav>
    </aside>
  )
}
