import { useEffect, useState } from 'react'

function useUserFetch(url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function fetchUsers() {
      setLoading(true)
      setError('')

      try {
        const response = await fetch(url, {
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error('ไม่สามารถโหลดข้อมูลผู้ใช้ได้')
        }

        const result = await response.json()
        setData(result)
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
  }, [url])

  return {
    data,
    loading,
    error,
  }
}

export default useUserFetch