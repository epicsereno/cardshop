"use server";

import { slugify } from "@/lib/utils";

export async function createProductDraft(title: string) {
  return {
    title,
    slug: slugify(title),
    status: "DRAFT",
  };
}
