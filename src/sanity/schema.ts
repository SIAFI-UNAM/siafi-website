import type { SchemaTypeDefinition } from "sanity";
import { landingPageSchema } from "./schemas/landing-page-schema";
import { ContactAndOthersSchema } from "./schemas/contact-and-others-schema";
import { BlogSchema } from "./schemas/blog-schema";
import { AuthorSchema } from "./schemas/author-schema";
import { BlogCategorySchema } from "./schemas/blog-category-schema";
import { ExecutiveSchema } from "./schemas/executive-board-schema";
import { ProjectSchema } from "./schemas/project-schema";
import { PartnerSchema } from "./schemas/partner-schema";
import { aboutUsSchema } from "./schemas/about-us-schema";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		landingPageSchema,
		aboutUsSchema,
		ContactAndOthersSchema,
		BlogSchema,
		AuthorSchema,
		BlogCategorySchema,
		ExecutiveSchema,
		ProjectSchema,
		PartnerSchema,
	],
};
