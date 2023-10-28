import { defineField, defineType } from "sanity";

export default defineType({
  name: "social",
  title: "Social",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Platform of Social Media",
      type: "string",
    },
    {
      name: "url",
      title: "url",
      type: "url",
    },
  ],
});
