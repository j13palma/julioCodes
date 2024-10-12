import { defineField, defineType } from "sanity";

export default defineType({
  name: "projectPage",
  title: "Project Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "metadata.title",
        maxLength: 96,
      },
      description: "The URL-friendly version of a page's name or title.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "portableText",
      title: "Portable Text",
      type: "object",
      fields: [
        {
          name: "alignment",
          title: "Alignment",
          description: "Sets the block alignment. Defaults to Center.",
          type: "string",
          initialValue: "mx-auto",
          options: {
            list: [
              { title: "Center", value: "mx-auto" },
              { title: "Left", value: "mr-auto" },
              { title: "Right", value: "ml-auto" },
            ],
          },
        },
        {
          name: "value",
          title: "Body",
          type: "array",
          of: [
            {
              title: "Block",
              type: "block",
              styles: [
                { title: "Normal", value: "normal" },
                { title: "H1", value: "h1" },
                { title: "H2", value: "h2" },
                { title: "H3", value: "h3" },
                { title: "H4", value: "h4" },
                { title: "H5", value: "h5" },
                { title: "H6", value: "h6" },
              ],
              lists: [
                { title: "Bullet", value: "bullet" },
                { title: "Numbered", value: "number" },
              ],
              marks: {
                decorators: [
                  { title: "Strong", value: "strong" },
                  { title: "Emphasis", value: "em" },
                  { title: "Underline", value: "underline" },
                  { title: "Strike", value: "strike-through" },
                  { title: "Code", value: "code" },
                ],
                annotations: [
                  {
                    title: "URL",
                    name: "link",
                    type: "object",
                    fields: [
                      {
                        title: "URL",
                        name: "href",
                        type: "url",
                        validation: (Rule) =>
                          Rule.uri({
                            scheme: ["http", "https", "mailto", "tel"],
                          }),
                      },
                    ],
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  ],
});
