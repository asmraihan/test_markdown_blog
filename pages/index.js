import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'

export async function getStaticProps() {
  const files = fs.readdirSync('posts');
  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter
    }
  })

  return {
    props: {
      posts
    }
  }
}
// get posts from folder
export default function Home({ posts }) {

  // sort posts 
  const sortDate = (posts) => {
    const sortedData = posts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
    return sortedData;
}
sortDate(posts)

  return (
    // <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0'>
    <div className='container lg:w-3/4 mx-auto'>
      {posts?.map(({ slug, frontmatter }) => (
        <div
          key={slug}
          className='border border-gray-200 dark:border-gray-800 m-2 rounded-md lg:rounded-sm shadow-lg dark:shadow-none overflow-hidden mb-5'
        >
          <Link href={`/post/${slug}`}>
            <a className='lg:flex justify-start'>
              <div className='lg:w-1/2'>
              <Image className='object-cover'
                // objectFit="cover"
                width={650}
                height={340}
                alt={frontmatter.title}
                src={`/${frontmatter.socialImage}`}
              />
              
              </div>
              <div className='flex flex-col justify-between lg:pt-5'>
              <h1 className='p-4 font-semibold text-xl text-violet-600'>{frontmatter.title}</h1>
              <h1 className='px-4 lg:p-4 text-lg dark:text-white'>{frontmatter.metaDesc}</h1>
              <h1 className='p-4 dark:text-white'>Date : <span className='text-gray-500'>{frontmatter.date}</span></h1>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}


// dark mode

// export async function Toggle(){
//    let html = document.getElementById('html')
//    let btn = document.getElementById('btn-theme')

//    btn.addEventListener('click', () => {
//     html.classList.toggle('dark');
//   });
// }
// Toggle()