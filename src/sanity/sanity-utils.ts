import { client } from "./lib/client";
import { groq } from "next-sanity";
import type { Contact } from "@/models/Contact";
import type { LandingInfo, HeroInfo } from "@/models/Landing";
import type { BlogInfo } from "@/models/Blog";
import type { Member } from "@/models/Member";
import type { ProjectInfo } from "@/models/Project";
import { SponsorInfo } from "@/models/Sponsor";
import { AboutUsPage } from "@/models/AboutUs";

/**
 * Gets the landing page information from Sanity.
 * @returns {Promise<LandingInfo>} The landing page information.
 */
export async function getLandingInfo(): Promise<LandingInfo> {
	return client.fetch(
		groq`*[_type == "landingPage" && _id == "landingPage"][0]{
            "hero": { 
                "upperTitle": hero.up_title,
                "middleWords": hero.changing_words,
                "lowerTitle": hero.down_title,
                "siafiGroupImage": hero.siafi_group_image.asset->url
            },
            "aboutSection": {
                "title": about_us.title,
                "subtitle": about_us.subtitle,
                "description": about_us.description,
                "image": about_us.image.asset->url,
                "cta_text": about_us.cta,
                "cta_link": about_us.cta_link
            },
            "projectsSection": {
                "title": projects_section.title,
                "description": projects_section.description
            },
            "contactSection": {
                "title": contact.title,
                "subtitle": contact.subtitle
            }
        }`
	);
}

/**
 * Gets the landing page hero information from Sanity.
 * @returns {Promise<HeroInfo>} The landing page hero information.
 */
export async function getHeroInfo(): Promise<HeroInfo> {
	return client.fetch(
		groq`*[_type == "landingPage" && _id == "landingPage"][0]{
            "upperTitle": hero.up_title,
            "middleWords": hero.changing_words,
            "lowerTitle": hero.down_title,
            "siafiGroupImage": hero.siafi_group_image.asset->url
        }`
	);
}

/**
 * Gets the contact information (social media, contact email, address, etc) from Sanity.
 * @returns {Promise<Contact>} The contact information.
 */
export async function getContactInfo(): Promise<Contact> {
	return client.fetch(
		groq`*[_type == "contact_and_others" && _id == "contact_and_others"][0]{
            "email": contact.email,
            "phone": contact.phone,
            "address": contact.address,
            "instagram": social_media. instagram,
            "facebook": social_media.facebook,
            "linkedin": social_media.linkedin,
            "youtube": social_media.youtube,
            "tiktok": social_media.tiktok,
            "twitter": social_media.twitter,
            "github": social_media.github
        }`
	);
}

/**
 * Gets all the blogs from Sanity.
 * @returns {Promise<BlogInfo[]>} The latest blogs.
 */
export async function getBlogs(): Promise<BlogInfo[]> {
	return client.fetch(
		groq`*[_type == "blog"] | order(publishedAt desc){
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            "image": image.asset->url,
            "category": category -> name,
            publishedAt,
            author ->{
                _id,
                name,
                "avatar": avatar.asset->url,
                bio
            },
            content
        }`
	);
}

/**
 * Gets the 3 latest blogs from Sanity.
 * @returns {Promise<BlogInfo[]>} The latest blogs.
 */
export async function getLatestBlogs(): Promise<BlogInfo[]> {
	return client.fetch(
		groq`*[_type == "blog"][0..3] | order(publishedAt desc){
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            "image": image.asset->url,
            "category": category -> name,
            publishedAt,
            author ->{
                _id,
                name,
                "avatar": avatar.asset->url,
                bio
            },
            content
        }`
	);
}

/**
 * Gets a blog by its slug from Sanity.
 * @param slug The slug of the blog.
 * @returns The blog information.
 */
export async function getBlogBySlug(slug: string): Promise<BlogInfo> {
	return client.fetch(
		groq`*[_type == "blog" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            "image": image.asset->url,
            "category": category -> name,
            publishedAt,
            author ->{
                _id,
                name,
                "avatar": avatar.asset->url,
                bio
            },
            content
        }`,
		{ slug }
	) as BlogInfo;
}

/**
 * Gets the members of the executive board from Sanity.
 * @returns The members of the executive board.
 */
export async function getExecutiveBoardMembers(): Promise<Member[]> {
	return client.fetch(
		groq`*[_type == "executive_board"]{
            _id,
            name,
            username,
            "socialMediaLink": social_media_link,
            "image":{
                "url": avatar.asset->url,
                "alt": avatar.alt
            },
            "description": bio,
            "role": position,
            email
        }`
	);
}

/**
 * Gets the latest 8 projects from Sanity.
 * @returns The 8 latest projects info.
 */
export async function getLandingProjects(): Promise<ProjectInfo[]> {
	return client.fetch(
		groq`*[_type == "project"][0..8]{
            _id,
            title,
            "slug": slug.current,
            "description": content,
            "image":{
                "url": image.asset->url,
                "alt": image.alt
            },
            "last_updated": _updatedAt,
            authors
        }`
	);
}

/**
 * Gets all the projects from Sanity.
 * @returns All the projects info.
 */
export async function getProjects(): Promise<ProjectInfo[]> {
	return client.fetch(
		groq`*[_type == "project"]{
            _id,
            title,
            "slug": slug.current,
            "description": content,
            "image":{
                "url": image.asset->url,
                "alt": image.alt
            },
            "last_updated": _updatedAt,
            authors
        }`
	);
}

/**
 * Gets a project by its slug from Sanity.
 * @param slug The slug of the project.
 * @returns The project information.
 */
export async function getProjectBySlug(slug: string): Promise<ProjectInfo> {
	return client.fetch(
		groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            title,
            "slug": slug.current,
            "description": content,
            "image":{
                "url": image.asset->url,
                "alt": image.alt
            },
            "last_updated": _updatedAt,
            authors
        }`,
		{ slug }
	) as ProjectInfo;
}

/**
 * Gets the sponsors from Sanity.
 * @returns The sponsors info.
 */
export const getSponsors = async (): Promise<SponsorInfo[]> => {
	return client.fetch(
		groq`*[_type == "partner"]{
            _id,
            "name": partner_name,
            "image":{
                "url": partner_logo.asset->url,
                "alt": partner_logo.alt
            },
            description
        }`
	);
};

/**
 * Gets the about us page information from Sanity.
 * @returns The about us page information.
 */
export const getAboutUsInfo = async (): Promise<AboutUsPage> => {
	return client.fetch(
		groq`*[_type == "about_us"][0]{
            "title": hero.title,
            "subtitle": hero.subtitle,
            "hero_image":{
                "url": hero.image.asset->url,
                "alt": hero.image.alt
            },
            identity,
            "siafi_cores": {
                "title": siafi_cores.title,
                "subtitle": siafi_cores.subtitle,
                "description": siafi_cores.description,
                "cores": siafi_cores.cores[] {
                "name": name,
                "description": description,
                "image": {
                    "url": image.asset->url,
                    "alt": image.alt
                    }
                }
            },
        }`
	);
};
