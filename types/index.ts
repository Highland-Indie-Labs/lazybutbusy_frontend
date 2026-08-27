export type Surface = "paper" | "white" | "grey" | "chip" | "dark" | "black";
export type ShadowSize = "none" | "sm" | "md";

export interface Product {
  slug: string;
  name: string;
  version: string;
  icon: string;
  desc: string;
  points: string[];
  status?: "live" | "beta" | "abandoned";
}

export interface Tier {
  tag: string;
  name: string;
  price: string;
  per: string;
  desc: string;
  points: string[];
  featured?: boolean;
  cta: string;
}
