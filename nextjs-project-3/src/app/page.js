import Link from "next/link";

export default function Home() {

  return (
    <div>
        <h1>Welcome to Recipie App </h1>
        <Link href={"/recipe-list"}>Expoler recipe</Link>
    </div>
  );
}
