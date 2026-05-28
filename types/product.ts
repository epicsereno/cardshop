export type Grading = {
  company: "PSA" | "Beckett" | "SGC" | "JSA";
  grade: string;
  certNumber: string;
};

export type Product = {
  id: string;
  slug: string;
  title: string;
  category: string;
  sport: string;
  player: string;
  team: string;
  year: number;
  brand: string;
  rarity: "Common" | "Short Print" | "Limited" | "One of One";
  price: number;
  isAuction: boolean;
  grading: Grading;
};
