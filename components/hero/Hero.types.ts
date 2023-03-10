export interface HeroSearchResponse {
  response: string;
  "results-for": string;
  results: Hero[];
  error?: string | undefined;
}

export interface Hero {
  id: string;
  name: string;
  powerstats: PowerStats;
  biography: Biography;
  appearance: Appearance;
  work: Work;
  connections: Connections;
  image: Image;
}

export interface Appearance {
  gender: string;
  race: string;
  height: string[];
  weight: string[];
  "eye-color": string;
  "hair-color": string;
}

export interface Biography {
  "full-name": string;
  "alter-egos": string;
  aliases: string[];
  "place-of-birth": string;
  "first-appearance": string;
  publisher: string;
  alignment: string;
}

export interface Connections {
  "group-affiliation": string;
  relatives: string;
}

export interface Image {
  url: string;
}

export interface PowerStats {
  intelligence: string;
  strength: string;
  speed: string;
  durability: string;
  power: string;
  combat: string;
}

export interface Work {
  occupation: string;
  base: string;
}
