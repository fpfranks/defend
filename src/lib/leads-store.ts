import { Redis } from "@upstash/redis";

export interface StoredLead {
  id: string;
  name: string;
  phone: string;
  postcode: string;
  package: string;
  message: string;
  createdAt: number;
}

function getRedis() {
  return new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL!,
    token: process.env.UPSTASH_REDIS_REST_TOKEN!,
  });
}

const KEY = "defend:leads";

export async function addLead(
  data: Omit<StoredLead, "id" | "createdAt">
): Promise<StoredLead> {
  const lead: StoredLead = {
    ...data,
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    createdAt: Date.now(),
  };
  await getRedis().lpush(KEY, lead);
  return lead;
}

export async function getLeads(): Promise<StoredLead[]> {
  const list = await getRedis().lrange<StoredLead>(KEY, 0, -1);
  return list ?? [];
}
