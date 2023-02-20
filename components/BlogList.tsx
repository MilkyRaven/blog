import Image from "next/image"
import urlFor from "../lib/urlFor"
import category from "../schemas/category";

type Props = {
    posts: Post[];
}

function BlogList({posts}: Props) {
  return (
    <div>BlogList

        <hr></hr>
        <div>
            {/* Posts */}
            {posts.map(post => (
                <div key={post._id} className="flex flex-col group cursor-pointer">
                    <div className="relative w-full h-80 group-hover:scale-105 transition-transform duration-200 ease-out">
                    <Image
                    src={urlFor(post.mainImage).url()}
                    alt={post.author.name}
                    fill>
                        
                    </Image>
                    <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                        <div>
                            <p>{post.title}</p>
                            <p>
                                {new Date(post._createdAt).toLocaleDateString("en-US", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                })}
                            </p>
                        </div>
                        {/* minute 1.38
                        <div>
                            {post.categories.map(category => (
                                <div>
                                    <p>{category.title}</p>
                                </div>
                            ))}
                        </div> */}
                    </div>
                </div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default BlogList