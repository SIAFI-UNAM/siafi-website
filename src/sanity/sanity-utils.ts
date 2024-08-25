import { client } from "./lib/client";
import { groq } from "next-sanity";
import type { HeroInfo } from "@/models/Hero";
import type { Contact } from "@/models/Contact";

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
