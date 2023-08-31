import { Post } from "@/app/lib/interface"
import { client } from "@/app/lib/sanity"

const getData = async (slug : string) => {
    const query = `*[_type == "post" && slug.current == "${slug}"][0]`

    const data = await client.fetch(query)

    return data
}

const SlugPage = async ({
    params,
} : {
    params: { slug: string }
}) => {
    const data = await getData(params.slug) as Post
    console.log( 'data: ', data._createdAt)
    return (
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <header className="pt-6 xl:pb-6">
                <div className="space-y-1 text-center">
                    <div className="space-y-10">
                        <div className="">
                            <p className="text-base font-medium leading-6 text-lime-500">
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
                <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:"></div>
            </div>
        </div>
    )
}

export default SlugPage