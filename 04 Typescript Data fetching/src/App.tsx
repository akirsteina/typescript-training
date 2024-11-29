import { type ReactNode, useEffect, useState } from "react"
import BlogPosts, { type BlogPost } from "./components/BlogPosts"
import get from "./utils/http"
import fetchingImage from './assets/data-fetching.png'
import ErrorMessage from "./components/ErrorMessage"

type RawDataBlogPost = {
  id: number
  userId: number
  title: string
  body: string
}

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>()
  const [isFetching, setIsFetching] = useState<boolean>(false)
  const [error, setError] = useState<string>()

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true)
      try {
        const data = (await get("https://jsonplaceholder.typicode.com/posts")) as RawDataBlogPost[];
        const blogPosts: BlogPost[] = data.map(rawPost => {
          return {
            id: rawPost.id,
            title: rawPost.title,
            text: rawPost.body,
          };
        });
        setFetchedPosts(blogPosts)

      } catch (error) {
        if (error instanceof Error) setError(`Failed to fetch posts: ${error.message}`)
      }
      setIsFetching(false)
    }

    fetchData();
  }, []);

  let content: ReactNode
  if (error) content = <ErrorMessage text={error} />
  if (isFetching) content = <p id="loading-fallback">Loading...</p>
  if (fetchedPosts) content = <BlogPosts posts={fetchedPosts} />

  return <main>
    <img src={fetchingImage} alt='Tesdt' />
    {content}
  </main>
}

export default App
