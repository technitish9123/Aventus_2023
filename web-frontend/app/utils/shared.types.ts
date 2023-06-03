export interface MixpanelEventType {
  name: string;
  properties: any;
}

export interface SocialContentType {
  id: string;
  image: string;
  image_type: string;
  name: string;
  href?: string;
}

export interface FooterLinkType {
  id: string | number;
  title: string;
  ctaAction: string;
  download?: boolean;
  external?: boolean;
}

export interface FooterOptionType {
  id: number | string;
  title: string;
  options: FooterLinkType[];
}

export interface ButtonProps extends React.ButtonHTMLAttributes<{}> {
  wrapperClass?: string;
  className?: string;
  hashRedColor?: boolean;
  textGradient?: boolean;
  animated?: boolean;
  href?: string;
  variant?: "solid" | "outline";
}
