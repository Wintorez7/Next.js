import Link from "next/link";


export default function Home() {


  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-500 to-blue-600 p-6">
      <div className=" container mx-auto flex flex-col justify-center items-center">
        <h2 className="text-4xl text-white font-bold mb-5">Browse our Blog Collection</h2>
        <Link className="bg-white text-sm text-blue-600 font-semibold p-2 px-6 rounded-md" href={'/blogs'}>Explore Blogs</Link>
      </div>
    </div>
  );
}
