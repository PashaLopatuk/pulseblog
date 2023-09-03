import React from 'react'
import { Post } from '../lib/interface'
import { client } from '../lib/sanity'
import Link from 'next/link'

async function getData() {
    const query = '*[_type == "post"] | order(_createdAt)'
  
    const data = await client.fetch(query)
  
    return data
  }
  

const page = async () => {
  
  const data = await getData() as Post[]

  return (
    <div>
        <div className="text-center black:text-white font-semibold text-2xl">Posts: </div>
        <ul className="space-y-4">
        {
        data.map( (post) => (
          <li className="" key={post._id}>
            <article className="space-y-2 xl:grid-cols-4 xl:items-baseline xl:space-y-0">
              <div className="">
                <p className="text-base font-medium leading-6 text-lime-500">
                  {new Date(post._createdAt).toISOString().split('T')[0]}
                </p>
              </div>

              <Link className='space-y-3 xl:col-span-3' href={`/post/${post.slug.current}`} prefetch>
                <div className="">
                  <h3 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                    {post.title}
                  </h3>
                </div>

                <p className="prose max-w-none text-gray-500 dark:text-gray-400 line-clamp-2">
                  {post.overview}
                </p>
              </Link>
            </article>
          </li>
        ))
        }
      </ul>
    </div>
  )
}

export default page