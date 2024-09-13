import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { phonesData } from "@/data/server";

export const Phone = () => {
  return (
    <div className="w-[100%] h-[80vh] flex items-center justify-center">
      <Carousel className=" w-[100%] flex items-center justify-center">
        <CarouselContent className="p-5 flex items-center justify-center ">
          {phonesData.map((phone) => (
            <CarouselItem key={phone.id} className="pl-1 md:basis-1/2 lg:basis-1/4 ">
              <div className=" w-[350px] h-[400px] shadow-lg shadow-gray-400 px-12 py-5 border-2 rounded-xl hover:shadow-md hover:shadow-gray-300">
                <img
                  src={phone.img} 
                  alt={phone.title} 
                  className="w-[200px]  object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{phone.title}</h3> 
                  <p className="text-gray-600">{phone.rame}</p> 
                  <p className="text-gray-600">Color: {phone.color}</p> 
                  <p className="text-gray-600">Brand: {phone.brand}</p> 
                  <p className="text-lg font-bold">$ {phone.price}</p> 
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
