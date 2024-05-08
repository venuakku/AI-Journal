import { auth } from '@clerk/nextjs'
import Link from 'next/link'

export default async function Home() {
  const { userId } = await auth()
  let href = userId ? '/journal' : '/new-user'

  return (
   <div className='w-screen h-screen flex justify-center items-center text-white bg-black'>
    <div className='w-full max-w-[600px] mx-auto'>
      <h1 className='text-6xl mb-4'>The best Journal app, period.</h1>
      <p className='text-2xl text-white/60 mb-4'>This is the best app for tracking your mood through out your life. All
          you have to do is be honest.</p>
      <div>
        <Link href={href}>
          <button className='bg-blue-600 rounded-lg text-xl px-4 py-2'>Get Started</button>
        </Link>
      </div>
    </div>
   </div>
  )
}
