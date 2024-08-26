import { client } from "./lib/client";
import { groq } from "next-sanity";
import type { Contact } from "@/models/Contact";
import type { LandingInfo, HeroInfo } from "@/models/Landing";

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
