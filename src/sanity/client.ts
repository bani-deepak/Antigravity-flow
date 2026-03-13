// eslint-disable-next-line @typescript-eslint/no-require-imports
import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const projectId = "ywcem2gl";
export const dataset = "production";
export const apiVersion = "2024-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

const builder = imageUrlBuilder(client);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source);
}
