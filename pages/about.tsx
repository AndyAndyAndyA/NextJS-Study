import Head from 'next/head'
import { useRouter } from 'next/router'
export default function Page() {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>About Page</title>
      </Head>
      <h1 className='text-3xl font-bold text-red-700 flex justify-center items-center '>
        About Page
      </h1>
      <button className='flex justify-center items-center ' onClick={() => router.back()}>
        back
      </button>
      <button className='flex justify-center items-center ' onClick={() => router.push('/')}>
        home
      </button>
    </div>
  )
}
