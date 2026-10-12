export type Img = { src: string; alt: string; caption?: string; ratio?: string };
export type Item = { eyebrow?: string; title?: string; text: string };

export type Block =
  | { type: 'text'; paragraphs: string[] }
  | { type: 'cards'; items: Item[]; columns?: 2 | 3 | 4 }
  | { type: 'pills'; items: string[]; numbered?: boolean }
  | { type: 'image'; image: Img }
  | { type: 'images'; images: Img[] }
  | { type: 'chain'; title: string; text: string; items: string[] }
  | { type: 'flow'; badge: string; title: string; steps: string[]; notes: Item[] }
  | { type: 'table'; caption: string; head: string[]; rows: string[][]; note?: string }
  | { type: 'decision'; problemTag: string; problem: string; meta?: string; decisionTitle: string; decision: string; image?: Img; flip?: boolean }
  | { type: 'stats'; items: { v: string; l: string }[] }
  | { type: 'outcomes'; items: Item[] }
  | { type: 'quotes'; label?: string; items: { quote: string; who: string }[] }
  | { type: 'list'; label?: string; items: Item[] };

export type Section = { label: string; heading: string; lead?: string; blocks?: Block[] };

export type Case = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  eyebrow: string[];
  category: string;
  tag?: string;
  cardTitle: string;
  cardMeta: string;
  cover: Img;
  coverBg?: string;
  hero: Img;
  snapshot: { k: string; v: string }[];
  tldr: { challenge: string; did: string; outcome: string };
  numbers: { v: string; l: string }[];
  sections: Section[];
  next: string;
  draft?: boolean;
};
