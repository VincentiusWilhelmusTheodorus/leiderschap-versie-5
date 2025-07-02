'use client'

import dynamic from 'next/dynamic'

const LeadershipApp = dynamic(() => import('@/components/LeadershipApp'), {
  ssr: false,
  loading: () => <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
      <p className="text-blue-600 font-medium">Leiderschap app wordt geladen...</p>
    </div>
  </div>
})

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <LeadershipApp />
    </div>
  )
}