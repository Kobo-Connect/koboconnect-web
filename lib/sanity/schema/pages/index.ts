import { pressSchemas } from "./press";
import { aboutSchemas } from "./about";
import { careersSchemas } from "./careers";
import { helpSchemas } from "./help";
import { homeSchemas } from "./home";
import { contactUsSchema } from "./contact-us";
import { personalSchemas } from "./personal";

export const pageSchemas = [
  ...pressSchemas,
  ...aboutSchemas,
  ...careersSchemas,
  ...helpSchemas,
  ...homeSchemas,
  ...contactUsSchema,
  ...personalSchemas,
];
