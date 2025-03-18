import { fetchAuthUserAction } from "@/action";
import Image from "next/image";

export default async function Home() {

  const currentUser = await fetchAuthUserAction();


  return (
    <div>
      <h1 className=" text-3xl">Nextjs Authentication</h1>
      <h1>{currentUser?.name}</h1>
      <p>{currentUser?.email}</p>
      
    </div>
  );
}
