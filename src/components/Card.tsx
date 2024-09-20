import Image from 'next/image'
import Link from 'next/link'

import { urlForImage } from '~/lib/sanity.image'
import { type Post } from '~/lib/sanity.queries'
import { formatDate } from '~/utils'

export default function Card({ post }: { post: Post }) {
  return (
    <div className="card rounded-xl backdrop-blur-2xl bg-white/25 p-4 flex flex-col md:flex-row  shadow-xl m-4">
      {post.mainImage ? (
        <Link className="md:w-1/2 w-full" href={`/post/${post.slug.current}`}>

          <Image
            className="rounded-lg w-full"
            src={urlForImage(post.mainImage).width(500).height(300).url()}
            height={300}
            width={500}
            alt=""
          />
        </Link>
      
      ) : (
        <div className="card__cover--none" />
      )}
      <div className="py-4 md:py-0 md:px-4 flex flex-col justify-center">
        <h3 className=" text-2xl md:text-3xl font-bold">
          <Link className="" href={`/post/${post.slug.current}`}>
            {post.title}
          </Link>
        </h3>
        <p className="opacity-80 ">{post.excerpt}</p>
        <p className="opacity-80">{formatDate(post._createdAt)}</p>
      </div>
    </div>
  )
}
