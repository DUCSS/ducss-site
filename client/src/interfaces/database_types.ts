export interface LinkEntry {
  id: number;
  description?: string;
  link: string;
}

export interface InternshipEntry {
  id: number;
  title: string;
  shortDescription: string;
  links: [LinkEntry];
}
