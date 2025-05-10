'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function MessageRedirect() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to the correct URL
    router.replace('/admin/messages')
  }, [router])

  return (
    <div className="container py-10 text-center">
      <p>Redirecting to messages page...</p>
    </div>
  )
}
