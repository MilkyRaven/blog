import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense";
import PreviewBlogList from "../../components/PreviewBlogList";
import BlogList from "../../components/BlogList";

const query = groq`
*[_type=='post'] {
    ...,
    author->,
    categories[]->
} | order(createdAt desc)
`
export const revalidate = 60;

export default async function HomePage() {
    if (previewData()) {
        return (
            <PreviewSuspense fallback={(
                <div role="status">
                    <p className="text-center">
                        Loading Preview Data...
                    </p>
                </div>
            )}>
                <PreviewBlogList query={query}/>
                <h1>In Preview Mode</h1>
            </PreviewSuspense>)
    }

    const posts = await client.fetch(query)
    if (!posts){
        return  <div><h2>No data to show</h2></div>
    }
    return (
        <div>
            <h1 className="text-4xl">Welcome</h1>
            <BlogList posts={posts}/>
        </div>
    )
}