"use client";
import "@mantine/carousel/styles.css";
import { Carousel } from "@mantine/carousel";
import TestimonialCard from "./testimonial-card";

interface TestimonialCauroselProps {
  testimonials: Array<{
    name: string;
    title: string;
    comment: string;
    rating: number;
    image:
    | string
    | {
      asset: {
        _id: string;
        url: string;
        metadata: {
          dimensions: {
            width: number;
            height: number;
          };
        };
      };
      alt: string;
    };
  }>;
}

function TestimonialCaurosel({ testimonials }: TestimonialCauroselProps) {
  // Fallback data if no testimonials provided
  const fallbackTestimonials = [
    {
      name: "John Doe",
      image: {
        asset: {
          _id: "",
          url: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
          metadata: { dimensions: { width: 0, height: 0 } },
        },
        alt: "John Doe",
      },
      rating: 4,
      title: "Product Designer",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo a facilisis finibus scelerisque. In et venenatis leo, non luctus mau. Maecenas efficitur volutpat nibh, a aliquet elit.",
    },
  ];

  const displayTestimonials =
    testimonials && testimonials.length > 0
      ? testimonials
      : fallbackTestimonials;

  return (
    <Carousel
      height={"100%"}
      slideSize='70%'
      slideGap='lg'
      withControls
      styles={{
        control: {
          zIndex: 2,
          marginRight: -30,
          marginLeft: -25,
          "[data-inactive]": {
            opacity: 0,
            cursor: "default",
          },
        },
      }}
      emblaOptions={{
        loop: true,
        dragFree: true,
        align: "center",
      }}>
      {displayTestimonials.map((testimonial, index) => (
        <Carousel.Slide key={`${testimonial.name}-${index}`} className='py-4'>
          <TestimonialCard testimonial={testimonial} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}

export default TestimonialCaurosel;
