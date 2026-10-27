export interface LocalizedText { en: string; ar: string; }

export interface Project {
  slug: string;
  number: string;
  code: string;
  period: string;
  category: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
  overview: LocalizedText;
  challenge: LocalizedText;
  solution: LocalizedText;
  contribution: LocalizedText;
  features: LocalizedText[];
  stack: string[];
  accent: string;
  icon: string;
  site?: LocalizedText;
}

export interface Role {
  title: LocalizedText;
  org: LocalizedText;
  place: LocalizedText;
  period: string;
  points: LocalizedText[];
}

export interface Education {
  degree: LocalizedText;
  school: LocalizedText;
  place: LocalizedText;
  period: string;
  gpa: string;
}

export interface Certificate {
  date: string;
  title: LocalizedText;
  issuer: LocalizedText;
}

export interface SkillGroup {
  title: LocalizedText;
  items: LocalizedText[];
}
