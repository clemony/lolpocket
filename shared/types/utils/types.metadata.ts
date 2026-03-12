export interface Metadata {
  fetchedAt: string;
  locale: string;
  metadata: {
    author: string | null;
    date: string | null;
    description: string | null;
    image: string | null;
    title: string | null;
    url: string | null;
  };
  url: string;
}

export interface PatchNotesMeta extends Metadata {
  patch: string;
  riotSlug: string;
}

export interface PbeMeta extends Metadata {
  wikiLastModified: string | null;
}
