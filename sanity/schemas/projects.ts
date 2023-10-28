import { defineField, defineType } from "sanity";

export default defineType({
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of Project",
      type: "string",
    },
    {
      name: "img",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "summary",
      title: "Summary",
      type: "text",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skills" } }],
    },
    {
      name: "linkToBuild",
      title: "LinkToBuild",
      type: "url",
    },
  ],
});
