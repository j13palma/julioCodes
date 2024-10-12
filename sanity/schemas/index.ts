import { type SchemaTypeDefinition } from "sanity";

import experience from "./experience";
import pageInfo from "./pageInfo";
import projects from "./projects";
import page from "./page";
import skill from "./skill";
import social from "./social";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [experience, pageInfo, projects, page, skill, social],
};
