"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import * as motion from "motion/react-client";
import { Badge } from "@/components/ui/badge";

export const title = "Carousel with Thumbnails";

const slides = Array.from({ length: 7 }, (_, index) => ({
  id: index + 1,
  image: "",
}));

const DialogCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const handleApiChange = (newApi: CarouselApi) => {
    setApi(newApi);

    if (newApi) {
      setCurrent(newApi.selectedScrollSnap());

      newApi.on("select", () => {
        setCurrent(newApi.selectedScrollSnap());
      });
    }
  };

  return (
    <div className="mx-auto w-full space-y-4">
       <motion.h5
            className="font-bold"
          >
            Project:&nbsp;
            <span className="text-primary text-xl">CHUOICANHO</span> - Real
            Estate Management System
          </motion.h5>
      <Carousel setApi={handleApiChange}>
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem
              key={slide.id}
              className="aspect-[16/9] relative w-full"
            >
              <Image
                src={"/assets/images/project.png"}
                loading="lazy"
                alt="About"
                fill
                className="object-cover rounded-sm"
              />
              <div className="absolute text-sm bottom-0 left-0 w-full px-8 py-4 bg-black/85 grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <h6 className="font-bold text-primary">Login Page</h6>
                  <p>Allows users to log securely into the system.</p>
                </div>
                <div className="space-y-2">
                  <h6 className="font-bold">Core Features</h6>
                  <ol className="grid md:grid-cols-2 gap-2 list-decimal ml-6">
                    <li>Login Page</li>
                    <li>Register Page</li>
                    <li>Forgot Password Page</li>
                    <li>Reset Password Page</li>
                  </ol>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex justify-center gap-4 pt-4">
        {slides.map((slide, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="aspect-[16/9] relative w-full rounded-sm overflow-hidden cursor-pointer"
          >
            <Image
              key={slide.id}
              src={"/assets/images/project.png"}
              loading="lazy"
              alt="About"
              fill
              className="object-cover"
              onClick={() => api?.scrollTo(index)}
            />
            <div className="absolute bottom-3 left-3 flex justify-between">
              <Badge
                animate={{
                  backgroundColor:
                    current === index ? "var(--primary)" : "var(--background)",
                }}
                transition={{ duration: 0.5 }}
                variant="secondary"
                className="text-white bg-opacity-80 rounded-[0.375rem]"
              >
                {slide.id}
              </Badge>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DialogCarousel;
