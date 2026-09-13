// import { users as ALL_USERS} from './data/users.js'
import { useState, useEffect } from 'react'
import UserCard from './components/UserCard.jsx'
import FilterBar from './components/FilterBar.jsx'
// TODO Lab A: filter ALL_USERS ตาม query + minFollowers (คำนวณสดตอน render — ห้ามเก็บเป็น state)
// TODO Lab A: import และใช้ FilterBar.jsx + UserCard.jsx (เขียนเองก่อน — ตอนนี้ยังว่างอยู่)
// TODO Lab A: แสดงเป็น grid + "พบ X รายการ" + empty state + ปุ่มล้างตัวกรอง

const API_URL = 'https://mock-server-xi-one.vercel.app/users'

function App() {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [query, setQuery] = useState('')
  console.log('query', query)
  const [userFollowers, setUserFollowers] = useState(0)
  console.log('userFollowers', userFollowers)

  useEffect(() => {
    const controller = new AbortController()

    async function fetchUsers() {
      try {
        
        const response = await fetch(API_URL, {
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error('ไม่สามารถโหลดข้อมูลผู้ใช้ได้')
        }

        const data = await response.json()
        setUsers(data)
      } catch (fetchError) {
        if (fetchError.name !== 'AbortError') {
          setError(fetchError.message)
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    fetchUsers()

    return () => {
      controller.abort()
    }
  }, [query, userFollowers])

  if (loading) {
    return <p className="p-6">Loading</p>
  }
  if (error) {
    return <p className="p-6 text-red-600">{error}</p>
  }
  if (users.length === 0){
    return <p className="p-6">ไม่พบข้อมูลผู้ใช้</p>
  }




  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">GitHub User Browser</h1>
      {/* TODO: FilterBar + grid ของ UserCard จาก ALL_USERS (18 คนพร้อมใช้ใน data/users.js) */}
      <FilterBar
        query={query}
        handleQueryChange={(value) => { setQuery(value) }}
        handleUserFollowersChange={(value) => { setUserFollowers(value) }}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" >
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  )
}

export default App
