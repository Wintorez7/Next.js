import { fetchAuthUserAction } from "@/action";
import Logout from "@/components/log-out";
import { redirect } from "next/navigation";


export default async function Home() {

  const currentUser = await fetchAuthUserAction();
  console.log(currentUser)
  if(!currentUser?.success) redirect('/sign-in');

  return (
    <div>
      <h1 className=" text-3xl">Nextjs Authentication</h1>
      <h1>{currentUser?.data?.username}</h1>
      {console.log(currentUser?.data?.username)}
      { console.log(currentUser?.data?.email)}
      <p>{currentUser?.data?.email}</p>
      <Logout/>
    </div>
  );
}
