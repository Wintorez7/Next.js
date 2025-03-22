"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

function ProductCard({ item }) {

    const router = useRouter();


  return (
    <div className="w-full flex gap-6 mx-auto p-4">
      <Card className="w-[300px] shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden">
        <CardHeader>
          <CardTitle className="mx-auto">{item.title}</CardTitle>
          <img className="w-[150px] mx-auto" src={item?.thumbnail}/>
        </CardHeader>
        <CardContent>
          <p>Price :- {item?.price}</p>
          <p>Rating :- {item?.rating}⭐</p>
        </CardContent>
        <Button className="w-[50%] mx-auto bg-orange-600">Buy</Button>
        <Button className="w-[50%] -mt-4 mx-auto" 
         onClick={() => router.push(`/${item?.id}`)}>Details</Button>
      </Card>
    </div>
  );
}

export default ProductCard;
