import { groq } from "next-sanity";

export const experience = groq`*[_type == 'experience']{...,technologies[]->}`;
export const pageInfo = groq`*[_type == 'pageInfo'][0]`;
export const project = groq`*[_type == 'projects']{...,technologies[]->}`;
export const projectPage = groq`*[_type == 'projectPage']`;
export const skill = groq`*[_type == 'skill']`;
export const social = groq`*[_type == 'social']`;
