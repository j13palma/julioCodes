import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface ImageDoc {
  alt: string;
  asset: SanityImageSource;
}

export interface MetadataDoc {
  description: string;
  image: ImageDoc;
  title: string;
}
