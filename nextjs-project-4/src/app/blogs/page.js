import { BlogOverView } from "@/components/blog-overview"

async function fetchListOfBlogs() {
  try {
    const apiResponse = await fetch('http://localhost:3000/api/get-blog', {
      method:'GET',
      cache :'no-store'
    });

    const result = await apiResponse.json()
    console.log('Fetched Blog Data',result)
    return result?.data;
    
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

  async function Blogs() {
    
    const blogList = await fetchListOfBlogs()
    console.log(blogList,'blogList')

  return (
    <BlogOverView blogList={blogList}/>
  )
}

export default Blogs