import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import jwt from 'jsonwebtoken'
import DashNavLinks from "@/components/ui/dashboard/dashNavLinks"
import { toast } from 'sonner'

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

  try {
    // verify token
    const decoded = jwt.verify(token, process.env.JWT_KEY!) as { userId: string } 
    
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
    <html lang="en">
      <body className='dark'>
        <DashNavLinks />
        {children}
      </body>
    </html>
  )
}
