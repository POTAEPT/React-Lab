import { useEffect, useState } from 'react'

function getErrorMessage(status) {
  if (status === 404) {
    return 'ไม่พบข้อมูลที่ค้นหา (404)'
  }
  if (status === 403) {
    return 'ถูกจำกัดการเข้าถึงหรือ rate limit (403) — รอสักครู่แล้วลองใหม่'
  }
  return `ไม่สามารถโหลดข้อมูลได้ (${status})`
}

function useUserFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [retryKey, setRetryKey] = useState(0)

  useEffect(() => {
    if (!url) {
      setData(null)
      setLoading(false)
      setError('')
      return
    }

    const controller = new AbortController()

    async function fetchUsers() {
      setLoading(true)
      setError('')

      try {
        const response = await fetch(url, {
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error(getErrorMessage(response.status))
        }

        const result = await response.json()
        setData(result)
      } catch (fetchError) {
        if (fetchError.name !== 'AbortError') {
          setError(fetchError.message)
          setData(null)
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
  }, [url, retryKey])

  function refetch() {
    setRetryKey((key) => key + 1)
  }

  return {
    data,
    loading,
    error,
    refetch,
  }
}

export default useUserFetch
