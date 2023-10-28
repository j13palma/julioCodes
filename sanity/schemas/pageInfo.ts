import { defineField, defineType } from "sanity";

export default defineType({
  name: "pageInfo",
  title: "PageInfo",
  type: "document",
  fields: [
    {
      name: "banner",
      title: "Banner",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "role",
      title: "Role",
      type: "string",
    },
    {
      name: "heroImg",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "backgroundInfo",
      title: "BackgroundInformation",
      type: "string",
    },
    {
      name: "profilePic",
      title: "ProfilePic",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "phone",
      title: "PhoneNumber",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "socials",
      title: "Socials",
      type: "array",
      of: [{ type: "reference", to: { type: "social" } }],
    },
  ],
});
