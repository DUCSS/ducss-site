export interface LinkEntry {
  description?: string;
  link: string;
}

export interface InternshipEntry {
  title: string;
  shortDescription: string;
  links: [LinkEntry];
}
