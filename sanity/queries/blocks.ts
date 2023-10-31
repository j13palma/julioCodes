import { groq } from "next-sanity";

export const social = groq`*[_type == 'social']`;
