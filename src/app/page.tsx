
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { bannersServer } from "@/data/server"; // Assuming bannersServer is an array of banners
import { Phone } from "./phone";
import { ChartCard } from "./chart-card";
import { ChartPie } from "./pie-chart";
import { ChartRadius } from "./chart-radius";
import { Notebook } from "./notebook";



export default function Home() {
  return (
    <div>
     
      <section className="w-[100%] h-[100vh] flex items-center justify-center ">
        <Carousel className="w-full h-[300px] flex items-center justify-center">
          <CarouselContent>
            {bannersServer.map((banner) => (
              <CarouselItem key={banner.id}>
                <img
                  src={banner.img}
                  alt={`Banner ${banner.id}`}
                  className="w-full h-full object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      <section>
        <Phone/>
      </section>
      <section>
        <ChartCard/>
      </section>
      <section className="w-[100%] h-[80vh]  flex items-center justify-center ">
        <ChartPie/>
      </section>
      <section>
        <Notebook/>
      </section>
      <section className="w-[100%] h-[70vh]">
        <ChartRadius/>
      </section>
    </div>
  );
}
