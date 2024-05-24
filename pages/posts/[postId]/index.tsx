import { useRouter } from 'next/router'

export default function Page(props: any) {
  const router = useRouter()

  if (router.isFallback) {
    return <h1>Loading...</h1>
  }
  return (
    <div>
      <h1 className='text-3xl font-bold text-red-700 flex justify-center items-center h-screen'>
        Post Details {props.id}
      </h1>
      <h4 className='text-2xl font-bold text-red-700 flex justify-center items-center'>
        {props.dt}
      </h4>
      <p>{props.data}</p>
      <button className='flex justify-center items-center ' onClick={() => router.back()}>
        back
      </button>
      <button className='flex justify-center items-center ' onClick={() => router.push('/')}>
        home
      </button>
    </div>
  )
}

export async function getStaticPaths() {
  // const response = await fetch(`https://dummyjson.com/posts`)
  // const reply = await response.json()
  return {
    paths: [{ params: { postId: '1' } }, { params: { postId: '2' } }],
    // paths: reply.posts.map((p: any) => ({ params: { postId: p.id.toString() } })),
    fallback: false
    // fallback: false 表示不是默认给定的页面返回404页面
    // fallback: true  不会让用户干等,在加载完成前的loading画面
    /* 
    if (router.isFallback) {
    return(
      <h1>Loading...</h1>
    )
  } */
    // fallback: 'blocking' 表示预取功能,按需加载
  }
}

export async function getStaticProps(context: any) {
  const id = context.params.postId
  const dt = new Date().toLocaleDateString()
  const response = await fetch(`https://dummyjson.com/posts/${id}`)
  const reply = await response.json()

  return {
    props: {
      id,
      dt,
      data: reply.body
    },
    revalidate: 30
  }
}
