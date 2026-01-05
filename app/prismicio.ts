import * as prismic from "@prismicio/client";
import { enableAutoPreviews } from "@prismicio/next";

export function createClient(
  config: prismic.ClientConfig = {}
) {
  const client = prismic.createClient("websitev3", config);

  

  enableAutoPreviews({ client });

  return client;
}
