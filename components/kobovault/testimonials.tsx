import React from "react";
import TestimonialCaurosel, { TestimonialItem } from "./testimonial-caurosel";
import { getTestimonialsData } from "@/lib/sanity/queries/testimonials";

async function Testimonials() {
  const data = await getTestimonialsData();
  const title = data?.title || "Don’t Take Our Word For It";
  const description =
    data?.description ||
    "Hear from our satisfied users and learn how Kobo Vault has helped.";
  const items: TestimonialItem[] = (data?.testimonials || []).map((t, i) => ({
    id: i,
    name: t.name,
    title: t.title,
    comment: t.comment,
    rating: t.rating,
    image: { asset: { url: t.image?.asset?.url } },
  }));

  return (
    <div>
      <div className='max-w-6xl mx-auto py-10 md:py-14 px-4 grid grid-cols-1 gap-6 md:gap-8'>
        <div className='space-y-4 flex flex-col items-center text-center'>
          <h2 className='text-2xl md:text-4xl font-semibold leading-[1.25]'>
            {title}
          </h2>
          <p className='text-base font-medium max-w-md'>{description}</p>
        </div>

        <div>
          <TestimonialCaurosel testimonials={items} />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
