import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import jwt from 'jsonwebtoken'
import { Suspense } from 'react'

import DashNavLinks from "@/components/ui/dashboard/dashNavLinks"
import HeaderDashboard from '@/components/ui/dashboard/headerDashboard'
import HeaderSkeleton from '@/components/ui/skeletons/header-skeleton'
import CreateBtn from '@/components/ui/dashboard/createBtn'
import { toast } from 'sonner'
import NavCreateBtnSkeleton from '@/components/ui/skeletons/dashboard/nav-createbtn-skeleton'
import { UserProvider } from '@/lib/user-context'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const token = cookieStore.get('todovazzToken')?.value

  if (!token) {
    redirect('/login')
  }

  let decoded;

  try {
    // verify token
    decoded = jwt.verify(token, process.env.JWT_KEY!) as { name: string, user_id: string } 
    
    if (!decoded) {
      redirect('/login')
    }
  } catch (error) {
    if (error instanceof Error) {
      toast(error.message)
    } else {
      toast('Unknown error occurred')
    }
    redirect('/login')
  }

  return (
    <div className="min-h-screen">
      <Suspense fallback={<HeaderSkeleton />}>
        <HeaderDashboard name={decoded.name} />
      </Suspense>
      <UserProvider value={{ user_id: decoded.user_id, name: decoded.name }}>
        <main className="p-10 flex flex-col gap-5">
          <Suspense fallback={<NavCreateBtnSkeleton />}>
            <div className="flex justify-between">
              <DashNavLinks />
              <CreateBtn user_id={decoded.user_id} />
            </div>
          </Suspense>
          {children}
        </main>
      </UserProvider>
    </div>
  )
}
