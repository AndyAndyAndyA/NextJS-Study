import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <h1 className='text-3xl font-bold text-red-700 flex justify-center items-center '>
        Home Page
      </h1>
      <ul className='flex justify-center items-center'>
        <li className='mr-5'>
          <Link href={'/posts'}>Post List</Link>
          <br />
          <Link href={'/about'}>about</Link>
          <br />
          <Link href={'/products'}>Products List</Link>
        </li>
      </ul>
    </div>
  )
}

Page.renderx = () => {
  return <h1>Home Page</h1>
}

Page.getTitle = () => {
  return {
    title: 'title of home page'
  }
}

export function getStaticProps() {
  return {
    props: {
      pageName: 'Home'
    }
  }
}
