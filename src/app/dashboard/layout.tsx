import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import jwt from 'jsonwebtoken'
import DashNavLinks from "@/components/ui/dashboard/dashNavLinks"
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import Header from '@/components/ui/header'
import { MdOutlineDashboard } from 'react-icons/md'
import LogOutBtn from '@/components/ui/dashboard/logOutBtn'

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
    decoded = jwt.verify(token, process.env.JWT_KEY!) as { name: string } 
    
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
    <>
      <Header 
        rightside={<LogOutBtn />}
        leftSide={
          <>
            <MdOutlineDashboard size={30} />
            <h1 className="text-2xl font-bold">
              Dashboard {decoded.name}
            </h1>
          </>
        }
      />
      <main className='min-h-screen p-4 flex flex-col gap-5'>
        <div className='flex flex-col gap-2'>
          <div className='flex flex-row justify-between'>
            <DashNavLinks />
            <Button variant="outline">
              Create
            </Button>
          </div>
        </div>
        {children}
      </main>
    </>
  )
}
