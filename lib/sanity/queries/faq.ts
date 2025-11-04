import { defineQuery } from "next-sanity";
import { client } from "../client";

export const FAQ_DATA_QUERY = defineQuery(`
  *[_type == "faqItem"] {
    _id,
    question,
    answer,
    order,
    published
  }
`);

export const getFAQData = async () => {
  const faqData = await client.fetch(FAQ_DATA_QUERY);
  return faqData;
};
