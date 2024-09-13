import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { notebookData } from '@/data/server';

export const Notebook = () => {
  return (
    <div className='w-[100%] h-[100vh] flex items-center justify-center'>
      <Carousel className="w-[100%]">
        <CarouselContent className="-ml-1">
          {notebookData.map((notebook) => (
            <CarouselItem key={notebook.id} className="pl-1 md:basis-1/2 lg:basis-1/4">
              <div className=" flex items-center justify-center h-[520px]">
                <Card>
                  <CardContent className="flex flex-col items-start justify-center shadow-lg rounded-xl shadow-gray-400 hover:shadow-md hover:shadow-gray-300 w-[350px] h-[435px] mb-3 ">
                    <img src={notebook.img} alt={notebook.title} className="w-[170px] h-[150px]" />
                    <h2 className="mt-2 text-xl font-semibold">{notebook.title}</h2>
                    <p className="text-sm text-gray-600">{notebook.brand}</p>
                    <p className="text-sm">{notebook.ram}</p>
                    <p className="text-sm">{notebook.geForce}</p>
                    <p className="text-sm">{notebook.core}</p>
                    <p className="text-sm">{notebook.display}</p>
                    <p className="text-sm">{notebook.memory}</p>
                    <p className="text-sm">{notebook.weight}</p>
                    <p className="text-lg font-medium">$ {notebook.price} Сум</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
