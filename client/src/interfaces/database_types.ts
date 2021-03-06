export interface LinkEntry {
  id: number;
  description?: string;
  link: string;
}

export interface InternshipEntry {
  id: number;
  company: string;
  title: string;
  shortDescription: string;
  links: [LinkEntry];
}
