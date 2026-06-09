import { put, list } from "@vercel/blob";

export interface StoredLead {
  id: string;
  name: string;
  phone: string;
  postcode: string;
  package: string;
  message: string;
  createdAt: number;
}

export async function addLead(
  data: Omit<StoredLead, "id" | "createdAt">
): Promise<StoredLead> {
  const lead: StoredLead = {
    ...data,
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    createdAt: Date.now(),
  };
  await put(`leads/${lead.id}.json`, JSON.stringify(lead), {
    access: "public",
    contentType: "application/json",
    addRandomSuffix: false,
  });
  return lead;
}

export async function getLeads(): Promise<StoredLead[]> {
  const { blobs } = await list({ prefix: "leads/", limit: 1000 });
  const leads = await Promise.all(
    blobs.map(async (blob) => {
      const res = await fetch(blob.url, { cache: "no-store" });
      return res.json() as Promise<StoredLead>;
    })
  );
  return leads.sort((a, b) => b.createdAt - a.createdAt);
}
