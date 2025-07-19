import Layout from '../../components/Layout'

export default function Dashboard() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">📊 Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-white dark:bg-zinc-800 rounded shadow">
          <h2 className="text-lg font-semibold">Total Users</h2>
          <p className="text-2xl">1,234</p>
        </div>
        <div className="p-4 bg-white dark:bg-zinc-800 rounded shadow">
          <h2 className="text-lg font-semibold">Monthly Revenue</h2>
          <p className="text-2xl">$8,567</p>
        </div>
      </div>
    </Layout>
  )
}
