import { defineField, defineType } from "sanity";

export default defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of Skill",
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
      name: "progress",
      title: "Progress",
      description: "Progress of skill from 0 to 100%",
      type: "number",
      validation: (Rule) => Rule.min(0).max(100),
    },
  ],
});