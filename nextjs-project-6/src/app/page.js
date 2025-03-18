import { fetchAuthUserAction } from "@/action";
import Image from "next/image";

export default async function Home() {

  const currentUser = await fetchAuthUserAction();
  console.log(currentUser)

  return (
    <div>
      <h1 className=" text-3xl">Nextjs Authentication</h1>
      <h1>{currentUser?.data?.username}</h1>
      <p>{currentUser?.data?.email}</p>
    </div>
  );
}
