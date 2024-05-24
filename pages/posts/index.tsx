import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Page(props: any) {
  const router = useRouter()
  return (
    <div>
      <h1 className='text-3xl font-bold text-red-700 flex justify-center items-center'>
        Posts Lists
      </h1>
      <h4 className='text-2xl font-bold text-red-700 flex justify-center items-center'>
        {props.dt}
      </h4>
      <ul className='flex justify-center items-center flex-wrap'>
        {props.data.map((item: any) => (
          <Link href={`/posts/${item.id}`} key={item.id}>
            <li className='text-2xl text-red-700 flex justify-center items-center' key={item.id}>
              <h4>{item.title}</h4>
            </li>
          </Link>
        ))}
      </ul>
      <button className='flex justify-center items-center ' onClick={() => router.back()}>
        back
      </button>
      <button className='flex justify-center items-center ' onClick={() => router.push('/')}>
        home
      </button>
    </div>
  )
}

export async function getStaticProps() {
  const dt = new Date().toLocaleDateString()
  const response = await fetch('https://dummyjson.com/posts')
  const reply = await response.json()

  return {
    props: {
      dt,
      data: reply.posts
    }
  }
}
