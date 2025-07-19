// pages/admin/index.js

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">관리자 대시보드</h1>
        <p className="text-gray-400">환영합니다! 이곳은 관리자 페이지입니다.</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">회원 관리</h2>
          <p className="text-gray-300">등록된 회원을 확인하고 관리합니다.</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">상품 등록</h2>
          <p className="text-gray-300">새로운 제품을 추가할 수 있습니다.</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">공지사항</h2>
          <p className="text-gray-300">중요한 공지나 업데이트를 관리합니다.</p>
        </div>
      </section>
    </div>
  );
}
