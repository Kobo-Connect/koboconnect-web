"use client";
import "@mantine/carousel/styles.css";
import { Carousel } from "@mantine/carousel";
import TestimonialCard from "./testimonial-card";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

export type TestimonialItem = {
  name: string;
  title: string;
  comment: string;
  rating: number;
  image?: { asset?: { url?: string } } | string;
  id?: string | number;
};

function TestimonialCaurosel({ testimonials }: { testimonials: TestimonialItem[] }) {
  const items = testimonials && testimonials.length > 0 ? testimonials : [
    {
      id: 1,
      name: "John Doe",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
      rating: 4,
      title: "Product Designer",
      comment:
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula ac ex ac vehicula. Vestibulum finibus ante sit amet cursus tempus.`,
    },
  ];

  return (
    <Carousel
      height='100%'
      className="px-6 md:px-14"
      slideGap='lg'
      controlsOffset='sm'
      controlSize={26}
      nextControlIcon={
        <svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="25" fill="#009A74" />
          <path d="M27.4297 18.9299L33.4997 24.9999L27.4297 31.0699" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16.5 25H33.33" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      }
      previousControlIcon={
        <svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="25" transform="matrix(-1 0 0 1 50 0)" fill="#F6F9F8" />
          <path d="M22.5703 18.9299L16.5003 24.9999L22.5703 31.0699" stroke="#363E3F" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M33.5 25H16.67" stroke="#363E3F" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      }
      emblaOptions={{
        dragFree: false,
        align: "center",
      }}>
      {items.map((testimonial) => (
        <Carousel.Slide key={testimonial.id} className='py-4'>
          <TestimonialCard testimonial={testimonial} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}

export default TestimonialCaurosel;
