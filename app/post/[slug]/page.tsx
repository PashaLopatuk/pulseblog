import { Post } from "@/app/lib/interface"
import { client } from "@/app/lib/sanity"
import { urlFor } from "@/app/lib/sanityImageUrl"
import { PortableText } from "@portabletext/react"
import Image from 'next/image'
import type { Metadata } from 'next'
import Link from "next/link"
import { HOME } from "@/app/tools/urls"

const getData = async (slug : string) => {
    const query = `*[_type == "post" && slug.current == "${slug}"][0]`

    const data = await client.fetch(query)

    return data
}

export const metadata: Metadata = {
    title: 'PulseBlog',
    description: 'Immerse yourself in a world of discoveries',
}

const SlugPage = async ({
    params,
} : {
    params: { slug: string }
}) => {
    const data = await getData(params.slug) as Post

    const PortableTextComponent = {
        types: {
            image: ({value} : {value: any}) => (
                <Image  src={urlFor(value).url()} alt="Image" className="rounded-lg max-h-72 object-contain" width={800} height={800}/>
            )
        }
    }

    

    return (
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
            <header className="pt-6 xl:pb-6">
                <div className="space-y-1 text-center">
                    <div className="space-y-10">
                        <div className="">
                            <Link href={HOME} className="hover:text-lime-500 transition font-semibold black:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                            </svg>

                            </Link>
                            <p className="text-base font-medium leading-6 text-lime-500 ">
                                {new Date(data._createdAt).toISOString().split('T')[0]}
                            </p>
                        </div>
                    </div>

                    <div className="">
                        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                            {data.title}
                        </h1>
                    </div>
                </div>
            </header>

            <div className="divide-y divide-gray-200 pb-7 divide-gray-700 xl:divide-y-0">
                <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
                    <div className="prose max-w-none pb-8 pt-10 dark:prose-invert prose-lg">
                         
                         <PortableText value={data.content} components={PortableTextComponent} /> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SlugPage