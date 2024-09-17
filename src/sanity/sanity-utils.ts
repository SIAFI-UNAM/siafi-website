import { client } from "./lib/client";
import { groq } from "next-sanity";
import type { Contact } from "@/models/Contact";
import type { LandingInfo, HeroInfo } from "@/models/Landing";
import type { BlogInfo } from "@/models/Blog";
import type { Member } from "@/models/Member";
import type { ProjectInfo } from "@/models/Project";
import { SponsorInfo } from "@/models/Sponsor";

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

export const getSponsors = (): Promise<SponsorInfo[]> => {
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
