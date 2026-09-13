// import { users as ALL_USERS} from './data/users.js'
import { useState } from 'react'
import UserCard from './components/UserCard.jsx'
import useUserFetch from './hooks/userFetch.jsx'
import FilterBar from './components/FilterBar.jsx'
// TODO Lab A: filter ALL_USERS ตาม query + minFollowers (คำนวณสดตอน render — ห้ามเก็บเป็น state)
// TODO Lab A: import และใช้ FilterBar.jsx + UserCard.jsx (เขียนเองก่อน — ตอนนี้ยังว่างอยู่)
// TODO Lab A: แสดงเป็น grid + "พบ X รายการ" + empty state + ปุ่มล้างตัวกรอง

const API_URL = 'https://mock-server-xi-one.vercel.app/users'

function buildUsersUrl(searchQuery, searchFollowers) {
  const params = new URLSearchParams()

  if (searchQuery) {
    params.set('login_like', searchQuery)
  }
  if (searchFollowers > 0) {
    params.set('followers_gte', String(searchFollowers))
  }

  const searchParams = params.toString()
  return searchParams ? `${API_URL}?${searchParams}` : API_URL
}

function App() {
  const [query, setQuery] = useState('')
  const [userFollowers, setUserFollowers] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchFollowers, setSearchFollowers] = useState(0)
  const [hasSearched, setHasSearched] = useState(false)

  const url = hasSearched ? buildUsersUrl(searchQuery, searchFollowers) : null
  const { data, loading, error, refetch } = useUserFetch(url)
  const users = data ?? []

  function handleSearch() {
    setSearchQuery(query)
    setSearchFollowers(userFollowers)
    setHasSearched(true)
  }

  function handleClear() {
    setQuery('')
    setUserFollowers(0)
    setSearchQuery('')
    setSearchFollowers(0)
    setHasSearched(false)
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="mb-6 text-2xl font-bold text-slate-900">GitHub User Browser</h1>
      <FilterBar
        query={query}
        userFollowers={userFollowers}
        handleQueryChange={setQuery}
        handleUserFollowersChange={setUserFollowers}
        onSearch={handleSearch}
        onClear={handleClear}
      />

      {hasSearched && !loading && !error && (
        <p className="mb-4 text-sm text-slate-600">
          พบ {users.length} รายการ
        </p>
      )}

      {loading && <p className="text-slate-600">Loading</p>}

      {error && (
        <div className="rounded-xl border border-dashed border-red-200 bg-red-50 px-6 py-12 text-center">
          <p className="text-lg font-medium text-red-700">{error}</p>
          <button
            type="button"
            onClick={refetch}
            className="mt-4 rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 hover:bg-sky-200"
          >
            ลองใหม่
          </button>
        </div>
      )}

      {!hasSearched && !loading && !error && (
        <div className="rounded-xl border border-dashed border-slate-300 px-6 py-12 text-center">
          <p className="text-lg font-medium text-slate-800">ยังไม่ได้ค้นหา</p>
          <p className="mt-2 text-sm text-slate-500">
            กรอกเงื่อนไขแล้วกด Search เพื่อโหลดข้อมูล
          </p>
        </div>
      )}

      {hasSearched && !loading && !error && users.length === 0 && (
        <div className="rounded-xl border border-dashed border-slate-300 px-6 py-12 text-center">
          <p className="text-lg font-medium text-slate-800">ไม่พบผู้ใช้ที่ตรงกับเงื่อนไข</p>
          <p className="mt-2 text-sm text-slate-500">
            ลองลดค่า &apos;ผู้ติดตามขั้นต่ำ&apos; หรือแก้คำค้นหา
          </p>
          <button
            type="button"
            onClick={handleClear}
            className="mt-4 rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 hover:bg-sky-200"
          >
            ล้างตัวกรอง
          </button>
        </div>
      )}

      {hasSearched && !loading && !error && users.length > 0 && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  )
}

export default App
