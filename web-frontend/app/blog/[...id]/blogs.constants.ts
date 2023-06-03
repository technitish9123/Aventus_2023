export interface SocialContentType {
  id: string;
  image: string;
  image_type: string;
  name: string;
  href?: string;
}

export const BLOGS_SOCIALS_CONSTANTS: SocialContentType[] = [
  {
    id: "twitter",
    image: "/assets/icons/socials/twitter",
    image_type: "svg",
    name: "twitter",
  },
  {
    id: "linkedin",
    image: "/assets/icons/socials/linkedin",
    image_type: "svg",
    name: "linkedin",
  },
];
